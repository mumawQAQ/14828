// ==UserScript==
// @name         WME RA Util
// @namespace    https://greasyfork.org/users/30701-justins83-waze
// @version      2022.08.12.03
// @description  Providing basic utility for RA adjustment without the need to delete & recreate
// @include      https://www.waze.com/editor*
// @include      https://www.waze.com/*/editor*
// @include      https://beta.waze.com/*
// @exclude      https://www.waze.com/user/editor*
// @require      https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @author       JustinS83
// @grant        none
// @license      GPLv3
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// ==/UserScript==

/* global W */
/* global WazeWrap */
/* global OpenLayers */
/* global require */
/* global $ */
/* global _ */
/* global I18n */
/* eslint curly: ["warn", "multi-or-nest"] */

/*
non-normal RA color:#FF8000
normal RA color:#4cc600
*/
(function() {

    var RAUtilWindow = null;
    var UpdateSegmentGeometry;
    var MoveNode, MultiAction;
    var drc_layer;
	let wEvents;

    //var totalActions = 0;
    var _settings;
    const updateMessage = "Like, omg, he actually fixed the blue line issue.";

    function bootstrap(tries = 1) {

        if (W && W.map &&
            W.model && require &&
            WazeWrap.Ready)
            init();
        else if (tries < 1000)
            setTimeout(function () {bootstrap(++tries);}, 200);
    }

    bootstrap();


    function init(){
        injectCss();
        UpdateSegmentGeometry = require('Waze/Action/UpdateSegmentGeometry');
        MoveNode = require("Waze/Action/MoveNode");
        MultiAction = require("Waze/Action/MultiAction");

        if(W.map.events)
		    wEvents = W.map.events;
	    else
		    wEvents = W.map.getMapEventsListener();

        RAUtilWindow = document.createElement('div');
        RAUtilWindow.id = "RAUtilWindow";
        RAUtilWindow.style.position = 'fixed';
        RAUtilWindow.style.visibility = 'hidden';
        RAUtilWindow.style.top = '15%';
        RAUtilWindow.style.left = '25%';
        RAUtilWindow.style.width = '510px';
        RAUtilWindow.style.zIndex = 100;
        RAUtilWindow.style.backgroundColor = '#FFFFFE';
        RAUtilWindow.style.borderWidth = '0px';
        RAUtilWindow.style.borderStyle = 'solid';
        RAUtilWindow.style.borderRadius = '10px';
        RAUtilWindow.style.boxShadow = '5px 5px 10px Silver';
        RAUtilWindow.style.padding = '4px';

        var alertsHTML = '<div id="header" style="padding: 4px; background-color:#92C3D3; border-radius: 5px;-moz-border-radius: 5px;-webkit-border-radius: 5px; color: white; font-weight: bold; text-align:center; letter-spacing: 1px;text-shadow: black 0.1em 0.1em 0.2em;"><img src="https://storage.googleapis.com/wazeopedia-files/1/1e/RA_Util.png" style="float:left"></img> Roundabout Utility <a data-toggle="collapse" href="#divWrappers" id="collapserLink" style="float:right"><span id="collapser" style="cursor:pointer;padding:2px;color:white;" class="fa fa-caret-square-o-up"></a></span></div>';
        // start collapse // I put it al the beginning
      alertsHTML += '<div id="divWrappers" class="collapse in">';
         //***************** Round About Angles **************************
         alertsHTML += '<p style="margin: 10px 0px 0px 20px;"><input type="checkbox" id="chkRARoundaboutAngles">&nbsp;Enable Roundabout Angles</p>';
         //***************** Shift Amount **************************
         // Define BOX
         alertsHTML += '<div id="contentShift" style="text-align:center;float:left; width: 120px;max-width: 24%;height: 170px;margin: 1em 5px 0px 0px;opacity:1;border-radius: 2px;-moz-border-radius: 2px;-webkit-border-radius: 4px;border-width:1px;border-style:solid;border-color:#92C3D3;padding:2px;}">';
         alertsHTML += '<b>Shift amount</b></br><input type="text" name="shiftAmount" id="shiftAmount" size="1" style="float: left; text-align: center;font: inherit; line-height: normal; width: 30px; height: 20px; margin: 5px 4px; box-sizing: border-box; display: block; padding-left: 0; border-bottom-color: rgba(black,.3); background: transparent; outline: none; color: black;" value="1"/> <div style="margin: 5px 4px;">Meter(s)';
            // Shift amount controls
            alertsHTML += '<div id="controls" style="text-align:center; padding:06px 4px;width=100px; height=100px;margin: 5px 0px;border-style:solid; border-width: 2px;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;box-shadow: inset 0px 0px 50px -14px rgba(0,0,0,1);-moz-box-shadow: inset 0px 0px 50px -14px rgba(0,0,0,1);-webkit-box-shadow: inset 0px 0px 50px -14px rgba(0,0,0,1); background:#92C3D3;align:center;">';
            //Single Shift Up Button
            alertsHTML += '<span id="RAShiftUpBtn" style="cursor:pointer;font-size:14px;">';
            alertsHTML += '<i class="fa fa-angle-double-up fa-2x" style="color: white; text-shadow: black 0.1em 0.1em 0.2em; vertical-align: top;"> </i>';
            alertsHTML += '<span id="UpBtnCaption" style="font-weight: bold;"></span>';
            alertsHTML += '</span><br>';
            //Single Shift Left Button
            alertsHTML += '<span id="RAShiftLeftBtn" style="cursor:pointer;font-size:14px;margin-left:-40px;">';
            alertsHTML += '<i class="fa fa-angle-double-left fa-2x" style="color: white; text-shadow: black 0.1em 0.1em 0.2em; vertical-align: middle"> </i>';
            alertsHTML += '<span id="LeftBtnCaption" style="font-weight: bold;"></span>';
            alertsHTML += '</span>';
            //Single Shift Right Button
            alertsHTML += '<span id="RAShiftRightBtn" style="float: right;cursor:pointer;font-size:14px;margin-right:5px;">';
            alertsHTML += '<i class="fa fa-angle-double-right fa-2x" style="color: white;text-shadow: black 0.1em 0.1em 0.2em;  vertical-align: middle"> </i>';
            alertsHTML += '<span id="RightBtnCaption" style="font-weight: bold;"></span>';
            alertsHTML += '</span><br>';
            //Single Shift Down Button
            alertsHTML += '<span id="RAShiftDownBtn" style="cursor:pointer;font-size:14px;margin-top:0px;">';
            alertsHTML += '<i class="fa fa-angle-double-down fa-2x" style="color: white;text-shadow: black 0.1em 0.1em 0.2em;  vertical-align: middle"> </i>';
            alertsHTML += '<span id="DownBtnCaption" style="font-weight: bold;"></span>';
            alertsHTML += '</span>';
         alertsHTML += '</div></div></div>';
         //***************** Rotation **************************
         // Define BOX
         alertsHTML += '<div id="contentRotate" style="float:left; text-align: center;width: 120px;max-width: 24%;max-height:145px;margin: 1em auto;opacity:1;border-radius: 2px;-moz-border-radius: 2px;-webkit-border-radius: 4px;border-width:1px;border-style:solid;border-color:#92C3D3;padding:2px;  display:inline-block; border-style:solid; border-width:1px; height:152px;  margin-right:5px;">';
         alertsHTML += '<b>Rotation amount</b></br><input type="text" name="rotationAmount" id="rotationAmount" size="1" style="float: left; text-align: center;font: inherit; line-height: normal; width: 30px; height: 20px; margin: 5px 4px; box-sizing: border-box; display: block; padding-left: 0; border-bottom-color: rgba(black,.3); background: transparent; outline: none; color: black;" value="1"/> <div style="margin: 5px 4px;">Degree(s)';
            // Rotation controls
            alertsHTML += '<div id="rotationControls" style="padding: 6px 4px;width=100px; margin: 20px 0px 50px 0px;align:center;">';
               // Rotate Button on the Left
               alertsHTML += '<span id="RARotateLeftBtn" class="btnRotate" style="float: left;">';
               alertsHTML += '<i class="fa fa-undo fa-2x" style="color: white; text-shadow: black 0.1em 0.1em 0.2em; padding:2px;"> </i>';
               alertsHTML += '<span id="RotateLeftBtnCaption" style="font-weight: bold;"></span>';
               alertsHTML += '</span>';
               // Rotate button on the Right
               alertsHTML += '<span id="RARotateRightBtn" class="btnRotate" style="float: right;">';
               alertsHTML += '<i class="fa fa-repeat fa-2x" style="color: white; text-shadow: black 0.1em 0.1em 0.2em; padding:2px;"> </i>';
               alertsHTML += '<span id="RotateRightBtnCaption" style="font-weight: bold;"></span>';
         alertsHTML += '</div></div></div>';
         //********************* Diameter change ******************
         // Define BOX
         alertsHTML += '<div id="diameterChange" style="float:left; text-align: center;width: 120px;max-width: 24%;max-height:145px;margin: 1em auto;opacity:1;border-radius: 2px;-moz-border-radius: 2px;-webkit-border-radius: 4px;border-width:1px;border-style:solid;border-color:#92C3D3;padding:2px;  display:inline-block; border-style:solid; border-width:1px; height:152px;  margin-right:5px;">';
         alertsHTML += '<b>Change diameter</b></br></br>';
              // Diameter Change controls
            alertsHTML += '<div id="DiameterChangeControls" style="padding: 6px 4px;width=100px; margin: 5px 7px 50px 7px;align:center;">';
               // Decrease Button
               alertsHTML += '<span id="diameterChangeDecreaseBtn" style="float: left; width=45px; height=45px; background-color:#92C3D3; cursor:pointer; padding: 5px; font-size:14px; border:thin outset black; border-style:solid; border-width: 1px;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);-moz-box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);-webkit-box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);">';
               alertsHTML += '<i class="fa fa-compress fa-2x" style="color: white; text-shadow: black 0.1em 0.1em 0.2em; padding:2px;;"> </i>';
               alertsHTML += '<span id="diameterChangeDecreaseCaption" style="font-weight: bold;"></span>';
               alertsHTML += '</span>';
               // Increase Button
               alertsHTML += '<span id="diameterChangeIncreaseBtn" style="float: right; width=45px; height=45px; background-color:#92C3D3; cursor:pointer; padding: 5px; font-size:14px; border:thin outset black; border-style:solid; border-width: 1px;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);-moz-box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);-webkit-box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);">';
               alertsHTML += '<i class="fa fa-arrows-alt fa-2x" style="color: white; text-shadow: black 0.1em 0.1em 0.2em; padding:2px;"> </i>';
               alertsHTML += '<span id="diameterChangeIncreaseCaption" style="font-weight: bold;"></span>';
               alertsHTML += '</span>';
         alertsHTML += '</div></div>';
         //***************** Bump nodes **********************
         // Define BOX
         alertsHTML += '<div id="bumpNodes" style="float:left; text-align: center;width: 120px;max-width: 24%;max-height:145px;margin: 1em auto 0px auto;opacity:1;border-radius: 2px;-moz-border-radius: 2px;-webkit-border-radius: 4px;border-width:1px;border-style:solid;border-color:#92C3D3;padding:2px;  display:inline-block; border-style:solid; border-width:1px; height:152px;  margin-right:5px;">';
         alertsHTML += '<b>Move nodes</b></br>';
         // Move Nodes controls
         alertsHTML += '<div id="MoveNodesControls" style="padding: 2px;">';
            // Button A
            alertsHTML += '<div style="text-align:center; font-size:18px;">A Node';
               // Move node IN
               alertsHTML += '<p><span id="btnMoveANodeIn" class="btnMoveNode" style="color: white; font-size: 0.875em; text-shadow: black 0.1em 0.1em 0.2em; padding:3px 15px 3px 15px; margin:3px;">in</span>';
               // Move node OUT
               alertsHTML += '<span id="btnMoveANodeOut" class="btnMoveNode" class="btnMoveNode" style="color: white; font-size: 0.875em; text-shadow: black 0.1em 0.1em 0.2em; padding:3px 10px 3px 10px; margin:3px;">out</span>';
               alertsHTML += '</div>';
            // Button B
            alertsHTML += '<div style="text-align:center; font-size:18px;">B Node';
               // Move node IN
               alertsHTML += '<p><span id="btnMoveBNodeIn" class="btnMoveNode" style="color: white; font-size: 0.875em; text-shadow: black 0.1em 0.1em 0.2em; padding:3px 15px 3px 15px; margin:3px;">in</span>';
               // Move node OUT
               alertsHTML += '<span id="btnMoveBNodeOut" class="btnMoveNode" class="btnMoveNode" style="color: white; font-size: 0.875em; text-shadow: black 0.1em 0.1em 0.2em; padding:3px 10px 3px 10px; margin:3px;">out</span>';
               alertsHTML += '</div>';
        alertsHTML += '</div></div></div>';


        RAUtilWindow.innerHTML = alertsHTML;
        document.body.appendChild(RAUtilWindow);

        $('#RAShiftLeftBtn').click(RAShiftLeftBtnClick);
        $('#RAShiftRightBtn').click(RAShiftRightBtnClick);
        $('#RAShiftUpBtn').click(RAShiftUpBtnClick);
        $('#RAShiftDownBtn').click(RAShiftDownBtnClick);

        $('#RARotateLeftBtn').click(RARotateLeftBtnClick);
        $('#RARotateRightBtn').click(RARotateRightBtnClick);

        $('#diameterChangeDecreaseBtn').click(diameterChangeDecreaseBtnClick);
        $('#diameterChangeIncreaseBtn').click(diameterChangeIncreaseBtnClick);

        $('#btnMoveANodeIn').click(function(){moveNodeIn(WazeWrap.getSelectedFeatures()[0].model.attributes.id, WazeWrap.getSelectedFeatures()[0].model.attributes.fromNodeID);});
        $('#btnMoveANodeOut').click(function(){moveNodeOut(WazeWrap.getSelectedFeatures()[0].model.attributes.id, WazeWrap.getSelectedFeatures()[0].model.attributes.fromNodeID);});
        $('#btnMoveBNodeIn').click(function(){moveNodeIn(WazeWrap.getSelectedFeatures()[0].model.attributes.id, WazeWrap.getSelectedFeatures()[0].model.attributes.toNodeID);});
        $('#btnMoveBNodeOut').click(function(){moveNodeOut(WazeWrap.getSelectedFeatures()[0].model.attributes.id, WazeWrap.getSelectedFeatures()[0].model.attributes.toNodeID);});

        $('#shiftAmount').keypress(function(event) {
            if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57))
                event.preventDefault();
        });

        $('#rotationAmount').keypress(function(event) {
            if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57))
                event.preventDefault();
        });

        $('#collapserLink').click(function(){
            if($('#collapser').attr('class') == "fa fa-caret-square-o-down"){
                $("#collapser").removeClass("fa-caret-square-o-down");
                $("#collapser").addClass("fa-caret-square-o-up");
            }
            else{
                $("#collapser").removeClass("fa-caret-square-o-up");
                $("#collapser").addClass("fa-caret-square-o-down");
            }
            saveSettingsToStorage();
        });

        W.selectionManager.events.register("selectionchanged", null, checkDisplayTool);
        //W.model.actionManager.events.register("afterundoaction",null, undotriggered);
        //W.model.actionManager.events.register("afterclearactions",null,actionsCleared);

        var loadedSettings = $.parseJSON(localStorage.getItem("WME_RAUtil"));
        var defaultSettings = {
            divTop: "15%",
            divLeft: "25%",
            Expanded: true,
            RoundaboutAngles: true
        };
        _settings = loadedSettings ? loadedSettings : defaultSettings;

        $('#RAUtilWindow').css('left', _settings.divLeft);
        $('#RAUtilWindow').css('top', _settings.divTop);
        $("#chkRARoundaboutAngles").prop('checked', _settings.RoundaboutAngles);
        $("#chkRARoundaboutAngles").prop('checked', _settings.RoundaboutAngles);

        if(!_settings.Expanded){
            $("#divWrappers").removeClass("in");
            $("#divWrappers").addClass("collapse");
            $("#collapser").removeClass("fa-caret-square-o-up");
            $("#collapser").addClass("fa-caret-square-o-down");
        }

        $("#chkRARoundaboutAngles").click(function(){
            saveSettingsToStorage();

            if($("#chkRARoundaboutAngles").is(":checked")){
                wEvents.register("zoomend", null, DrawRoundaboutAngles);
                wEvents.register("moveend", null, DrawRoundaboutAngles);
                DrawRoundaboutAngles();
                drc_layer.setVisibility(true);
            }
            else{
                wEvents.unregister("zoomend", null, DrawRoundaboutAngles);
                wEvents.unregister("moveend", null, DrawRoundaboutAngles);
                drc_layer.setVisibility(false);
            }
        });

        if(_settings.RoundaboutAngles){
            wEvents.register("zoomend", null, DrawRoundaboutAngles);
            wEvents.register("moveend", null, DrawRoundaboutAngles);
            DrawRoundaboutAngles();
        }

        WazeWrap.Interface.ShowScriptUpdate("WME RA Util", GM_info.script.version, updateMessage, "https://greasyfork.org/en/scripts/23616-wme-ra-util", "https://www.waze.com/forum/viewtopic.php?f=819&t=211079");
    }

    function saveSettingsToStorage() {
        if (localStorage) {
            var settings = {
                divTop: "15%",
                divLeft: "25%",
                Expanded: true,
                RoundaboutAngles: true
            };

            settings.divLeft = $('#RAUtilWindow').css('left');
            settings.divTop = $('#RAUtilWindow').css('top');
            settings.Expanded = $("#collapser").attr('class').indexOf("fa-caret-square-o-up") > -1;
            settings.RoundaboutAngles = $("#chkRARoundaboutAngles").is(":checked");
            localStorage.setItem("WME_RAUtil", JSON.stringify(settings));
        }
    }

    function checkDisplayTool(){
        if(WazeWrap.hasSelectedFeatures() && WazeWrap.getSelectedFeatures()[0].model.type === 'segment'){
            if(!AllSelectedSegmentsRA() || WazeWrap.getSelectedFeatures().length === 0)
                $('#RAUtilWindow').css({'visibility': 'hidden'});
            else{
                $('#RAUtilWindow').css({'visibility': 'visible'});
                if(typeof jQuery.ui !== 'undefined')
                    $('#RAUtilWindow' ).draggable({ //Gotta nuke the height setting the dragging inserts otherwise the panel cannot collapse
                        stop: function(event, ui) {
                            $('#RAUtilWindow').css("height", "");
                            saveSettingsToStorage();
                        }
                    });
                //checkSaveChanges();
                checkAllEditable(WazeWrap.Model.getAllRoundaboutSegmentsFromObj(WazeWrap.getSelectedFeatures()[0]));
            }
        }
        else{
            $('#RAUtilWindow').css({'visibility': 'hidden'});
            if(typeof jQuery.ui !== 'undefined')
                $('#RAUtilWindow' ).draggable({
                    stop: function(event, ui) {
                        $('#RAUtilWindow').css("height", "");
                        saveSettingsToStorage();
                    }
                });
        }
    }

    function checkAllEditable(RASegs){
        var $RAEditable = $('#RAEditable');
        var allEditable = true;
        var segObj, fromNode, toNode;

        for(let i=0; i<RASegs.length;i++){
            segObj = W.model.segments.getObjectById(RASegs[i]);
            fromNode = segObj.getFromNode();
            toNode = segObj.getToNode();

            if(segObj !== "undefined"){
                if(fromNode && fromNode !== "undefined" && !fromNode.areConnectionsEditable())
                    allEditable = false;
                else if(toNode && toNode !== "undefined" && !toNode.areConnectionsEditable())
                    allEditable = false;
                var toConnected, fromConnected;

                if(toNode){
                    toConnected = toNode.attributes.segIDs;
                    for(let j=0;j<toConnected.length;j++){
                        if(W.model.segments.getObjectById(toConnected[j]) !== "undefined")
                            if(W.model.segments.getObjectById(toConnected[j]).hasClosures())
                                allEditable = false;
                    }
                }

                if(fromNode){
                    fromConnected = fromNode.attributes.segIDs;
                    for(let j=0;j<fromConnected.length;j++){
                        if(W.model.segments.getObjectById(fromConnected[j]) !== "undefined")
                            if(W.model.segments.getObjectById(fromConnected[j]).hasClosures())
                                allEditable = false;
                    }
                }
            }
        }
        if(allEditable)
            $RAEditable.remove();
        else{
            if($RAEditable.length === 0){
                $RAEditable = $('<div>', {id:'RAEditable', style:'color:red'});
                $RAEditable.text('One or more segments are locked above your rank or have a closure.');
                $('#RAUtilWindow').append($RAEditable);
            }
        }
        return allEditable;
    }

    function AllSelectedSegmentsRA(){
        for (let i = 0; i < WazeWrap.getSelectedFeatures().length; i++){
            if(WazeWrap.getSelectedFeatures()[i].model.attributes.id < 0 || !WazeWrap.Model.isRoundaboutSegmentID(WazeWrap.getSelectedFeatures()[i].model.attributes.id))
                return false;
        }
        return true;
    }

    function ShiftSegmentNodesLat(segObj, latOffset){
        var RASegs = WazeWrap.Model.getAllRoundaboutSegmentsFromObj(segObj);
        if(checkAllEditable(RASegs)){
            var gps;
            var newGeometry = segObj.geometry.clone();
            var originalLength = segObj.geometry.components.length;
            var multiaction = new MultiAction();
            multiaction.setModel(W.model);

            for(let i=0; i<RASegs.length; i++){
                segObj = W.model.segments.getObjectById(RASegs[i]);
                newGeometry = segObj.geometry.clone();
                originalLength = segObj.geometry.components.length;
                for(j=1; j < originalLength-1; j++){
                    gps = WazeWrap.Geometry.ConvertTo4326(segObj.geometry.components[j].x, segObj.geometry.components[j].y);
                    gps.lat += latOffset;
                    newGeometry.components.splice(j,0, new OpenLayers.Geometry.Point(segObj.geometry.components[j].x, WazeWrap.Geometry.ConvertTo900913(segObj.geometry.components[j].x,gps.lat).lat));
                    newGeometry.components.splice(j+1,1);
                }
                newGeometry.components[0].calculateBounds();
                newGeometry.components[originalLength-1].calculateBounds();
                multiaction.doSubAction(new UpdateSegmentGeometry(segObj, segObj.geometry, newGeometry));
                //W.model.actionManager.add(new UpdateSegmentGeometry(segObj, segObj.geometry, newGeometry));

                var node = W.model.nodes.objects[segObj.attributes.toNodeID];
                if(segObj.attributes.revDirection)
                    node = W.model.nodes.objects[segObj.attributes.fromNodeID];
                var newNodeGeometry = node.geometry.clone();
                gps = WazeWrap.Geometry.ConvertTo4326(node.attributes.geometry.x, node.attributes.geometry.y);
                gps.lat += latOffset;
                newNodeGeometry.y = WazeWrap.Geometry.ConvertTo900913(node.geometry.x, gps.lat).lat;
                newNodeGeometry.calculateBounds();

                var connectedSegObjs = {};
                var emptyObj = {};
                for(var j=0;j<node.attributes.segIDs.length;j++){
                    var segid = node.attributes.segIDs[j];
                    connectedSegObjs[segid] = W.model.segments.getObjectById(segid).geometry.clone();
                }
                //W.model.actionManager.add(new MoveNode(segObj, segObj.geometry, newNodeGeometry, connectedSegObjs, i));
                multiaction.doSubAction(new MoveNode(node, node.geometry, newNodeGeometry,connectedSegObjs,emptyObj));
                //W.model.actionManager.add(new MoveNode(node, node.geometry, newNodeGeometry));
                //totalActions +=2;
            }
            W.model.actionManager.add(multiaction);
        }
    }

    function ShiftSegmentsNodesLong(segObj, longOffset){
        var RASegs = WazeWrap.Model.getAllRoundaboutSegmentsFromObj(segObj);
        if(checkAllEditable(RASegs)){
            var gps, newGeometry, originalLength;
            var multiaction = new MultiAction();
            multiaction.setModel(W.model);

            //Loop through all RA segments & adjust
            for(let i=0; i<RASegs.length; i++){
                segObj = W.model.segments.getObjectById(RASegs[i]);
                newGeometry = segObj.geometry.clone();
                originalLength = segObj.geometry.components.length;
                for(let j=1; j < originalLength-1; j++){
                    gps = WazeWrap.Geometry.ConvertTo4326(segObj.geometry.components[j].x, segObj.geometry.components[j].y);
                    gps.lon += longOffset;
                    newGeometry.components.splice(j,0, new OpenLayers.Geometry.Point(WazeWrap.Geometry.ConvertTo900913(gps.lon, segObj.geometry.components[j].y).lon, segObj.geometry.components[j].y));
                    newGeometry.components.splice(j+1,1);
                }
                newGeometry.components[0].calculateBounds();
                newGeometry.components[originalLength-1].calculateBounds();
                //W.model.actionManager.add(new UpdateSegmentGeometry(segObj, segObj.geometry, newGeometry));
                multiaction.doSubAction(new UpdateSegmentGeometry(segObj, segObj.geometry, newGeometry));

                var node = W.model.nodes.objects[segObj.attributes.toNodeID];
                if(segObj.attributes.revDirection)
                    node = W.model.nodes.objects[segObj.attributes.fromNodeID];

                var newNodeGeometry = node.geometry.clone();
                gps = WazeWrap.Geometry.ConvertTo4326(node.attributes.geometry.x, node.attributes.geometry.y);
                gps.lon += longOffset;
                newNodeGeometry.x = WazeWrap.Geometry.ConvertTo900913(gps.lon, node.geometry.y).lon;
                newNodeGeometry.calculateBounds();

                var connectedSegObjs = {};
                var emptyObj = {};
                for(let j=0;j<node.attributes.segIDs.length;j++){
                    var segid = node.attributes.segIDs[j];
                    connectedSegObjs[segid] = W.model.segments.getObjectById(segid).geometry.clone();
                }
                //W.model.actionManager.add(new MoveNode(node, node.geometry, newNodeGeometry));
                multiaction.doSubAction(new MoveNode(node, node.geometry, newNodeGeometry, connectedSegObjs, emptyObj));
                //totalActions +=2;
            }
            W.model.actionManager.add(multiaction);
        }
    }

    function rotatePoints(origin, points, angle){
        var lineFeature = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(points),null,null);
        lineFeature.geometry.rotate(angle, new OpenLayers.Geometry.Point(origin.lon, origin.lat));
        return [].concat(lineFeature.geometry.components);
    }

    function RotateRA(segObj, angle){
        var RASegs = WazeWrap.Model.getAllRoundaboutSegmentsFromObj(segObj);
        var raCenter = W.model.junctions.objects[segObj.model.attributes.junctionID].geometry.coordinates;

        if(checkAllEditable(RASegs)){
            var gps, newGeometry, originalLength;
            var multiaction = new MultiAction();
            multiaction.setModel(W.model);

            //Loop through all RA segments & adjust
            for(let i=0; i<RASegs.length; i++){
                segObj = W.model.segments.getObjectById(RASegs[i]);
                newGeometry = segObj.geometry.clone();
                originalLength = segObj.geometry.components.length;

                var center = WazeWrap.Geometry.ConvertTo900913(raCenter[0], raCenter[1]);
                var segPoints = [];
                //Have to copy the points manually (can't use .clone()) otherwise the geometry rotation modifies the geometry of the segment itself and that hoses WME.
                for(let j=0; j<originalLength;j++)
                    segPoints.push(new OpenLayers.Geometry.Point(segObj.geometry.components[j].x, segObj.geometry.components[j].y));

                var newPoints = rotatePoints(center, segPoints, angle);

                for(let j=1; j<originalLength-1;j++){
                    newGeometry.components.splice(j, 0, new OpenLayers.Geometry.Point(newPoints[j].x, newPoints[j].y));
                    newGeometry.components.splice(j+1,1);
                }

                newGeometry.components[0].calculateBounds();
                newGeometry.components[originalLength-1].calculateBounds();
                //W.model.actionManager.add(new UpdateSegmentGeometry(segObj, segObj.geometry, newGeometry));
                multiaction.doSubAction(new UpdateSegmentGeometry(segObj, segObj.geometry, newGeometry));

                //**************Rotate Nodes******************
                var node = W.model.nodes.objects[segObj.attributes.toNodeID];
                if(segObj.attributes.revDirection)
                    node = W.model.nodes.objects[segObj.attributes.fromNodeID];

                var nodePoints = [];
                var newNodeGeometry = node.geometry.clone();

                nodePoints.push(new OpenLayers.Geometry.Point(node.attributes.geometry.x, node.attributes.geometry.y));
                nodePoints.push(new OpenLayers.Geometry.Point(node.attributes.geometry.x, node.attributes.geometry.y)); //add it twice because lines need 2 points

                gps = rotatePoints(center, nodePoints, angle);

                newNodeGeometry.x = gps[0].x;
                newNodeGeometry.y = gps[0].y;

                newNodeGeometry.calculateBounds();

                var connectedSegObjs = {};
                var emptyObj = {};
                for(let j=0;j<node.attributes.segIDs.length;j++){
                    var segid = node.attributes.segIDs[j];
                    connectedSegObjs[segid] = W.model.segments.getObjectById(segid).geometry.clone();
                }
                multiaction.doSubAction(new MoveNode(node, node.geometry, newNodeGeometry, connectedSegObjs, emptyObj));
                //totalActions +=2;
            }
            W.model.actionManager.add(multiaction);
        }
    }

    function RARotateLeftBtnClick(e){
        e.stopPropagation();
        var segObj = WazeWrap.getSelectedFeatures()[0];
        RotateRA(segObj, $('#rotationAmount').val());
    }

    function RARotateRightBtnClick(e){
        e.stopPropagation();

        var segObj = WazeWrap.getSelectedFeatures()[0];
        RotateRA(segObj, -$('#rotationAmount').val());
    }

    function ChangeDiameter(segObj, amount){
        var RASegs = WazeWrap.Model.getAllRoundaboutSegmentsFromObj(segObj);
        var raCenter = W.model.junctions.objects[segObj.model.attributes.junctionID].geometry.coordinates;

        if(checkAllEditable(RASegs)){
            var gps, newGeometry, originalLength;

            var center = WazeWrap.Geometry.ConvertTo900913(raCenter[0], raCenter[1]);
            //Loop through all RA segments & adjust
            for(let i=0; i<RASegs.length; i++){
                segObj = W.model.segments.getObjectById(RASegs[i]);
                newGeometry = segObj.geometry.clone();
                originalLength = segObj.geometry.components.length;

                for(let j=1; j < originalLength-1; j++){
                    let pt = segObj.geometry.components[j];
                    let h = Math.sqrt(Math.abs(Math.pow((pt.x - center.lon),2) + Math.pow((pt.y - center.lat),2)));
                    let ratio = (h + amount)/h;
                    let xdelta = (pt.x - center.lon) * ratio;
                    let ydelta = (pt.y - center.lat) * ratio;

                    newGeometry.components.splice(j,0, new OpenLayers.Geometry.Point(center.lon + xdelta, center.lat + ydelta));
                    newGeometry.components.splice(j+1,1);
                }
                newGeometry.components[0].calculateBounds();
                newGeometry.components[originalLength-1].calculateBounds();
                W.model.actionManager.add(new UpdateSegmentGeometry(segObj, segObj.geometry, newGeometry));

                var node = W.model.nodes.objects[segObj.attributes.toNodeID];
                if(segObj.attributes.revDirection)
                    node = W.model.nodes.objects[segObj.attributes.fromNodeID];

                var newNodeGeometry = node.geometry.clone();
                let h = Math.sqrt(Math.abs(Math.pow((newNodeGeometry.x - center.lon),2) + Math.pow((newNodeGeometry.y - center.lat),2)));
                let ratio = (h + amount)/h;
                let xdelta = (newNodeGeometry.x - center.lon) * ratio;
                let ydelta = (newNodeGeometry.y - center.lat) * ratio;
                newNodeGeometry.x = center.lon + xdelta;
                newNodeGeometry.y = center.lat + ydelta;
                newNodeGeometry.calculateBounds();
                var connectedSegObjs = {};
                var emptyObj = {};
                for(let j=0;j<node.attributes.segIDs.length;j++){
                    var segid = node.attributes.segIDs[j];
                    connectedSegObjs[segid] = W.model.segments.getObjectById(segid).geometry.clone();
                }
                W.model.actionManager.add(new MoveNode(node, node.geometry, newNodeGeometry, connectedSegObjs, emptyObj));
            }
            if(_settings.RoundaboutAngles)
                DrawRoundaboutAngles();
        }
    }

    function diameterChangeDecreaseBtnClick(e){
        e.stopPropagation();
        var segObj = WazeWrap.getSelectedFeatures()[0];
        ChangeDiameter(segObj, -1);
    }

    function diameterChangeIncreaseBtnClick(e){
        e.stopPropagation();
        var segObj = WazeWrap.getSelectedFeatures()[0];
        ChangeDiameter(segObj, 1);
    }

    function moveNodeIn(sourceSegID, nodeID){
        let isANode = true;
        let curSeg = W.model.segments.getObjectById(sourceSegID);
        if(curSeg.geometry.components.length > 2){
            if(nodeID === curSeg.attributes.toNodeID)
                isANode = false;
            //Add geo point on the other segment
            let node = W.model.nodes.getObjectById(nodeID);
            let currNodePOS = node.geometry.clone();
            let otherSeg; //other RA segment that we are adding a geo point to
            let nodeSegs = [...W.model.nodes.getObjectById(nodeID).attributes.segIDs];
            nodeSegs = _.without(nodeSegs, sourceSegID); //remove the source segment from the node Segs - we need to find the segment that is a part of the RA that is prior to our source seg
            for(let i=0; i<nodeSegs.length; i++){
                let s = W.model.segments.getObjectById(nodeSegs[i]);
                if(s.attributes.junctionID){
                    otherSeg = s;
                    break;
                }
            }

            var multiaction = new MultiAction();
            multiaction.setModel(W.model);
            //note and remove first geo point, move junction node to this point
            var newNodeGeometry = curSeg.geometry.components[(isANode ? 1 : curSeg.geometry.components.length - 2)].clone();
            newNodeGeometry.calculateBounds();

            let newSegGeo = curSeg.geometry.clone();
            newSegGeo.components.splice((isANode ? 1 : newSegGeo.components.length - 2),1);
            //delete the geo point
            multiaction.doSubAction(new UpdateSegmentGeometry(curSeg, curSeg.geometry, newSegGeo));

            //move the node
            var connectedSegObjs = {};
            var emptyObj = {};
            for(var j=0;j<node.attributes.segIDs.length;j++){
                var segid = node.attributes.segIDs[j];
                connectedSegObjs[segid] = W.model.segments.getObjectById(segid).geometry.clone();
            }
            multiaction.doSubAction(new MoveNode(node, node.geometry, newNodeGeometry,connectedSegObjs,emptyObj));

            if((otherSeg.attributes.revDirection && !curSeg.attributes.revDirection) || (!otherSeg.attributes.revDirection && curSeg.attributes.revDirection))
                    isANode = !isANode;

            let newGeo = otherSeg.geometry.clone();
            let originalLength = otherSeg.geometry.components.length;

            newGeo.components.splice((isANode ? -1 : 1),0, new OpenLayers.Geometry.Point(currNodePOS.x, currNodePOS.y));
            newGeo.components[0].calculateBounds();
            newGeo.components[originalLength].calculateBounds();

            multiaction.doSubAction(new UpdateSegmentGeometry(otherSeg, otherSeg.geometry, newGeo));


            W.model.actionManager.add(multiaction);

            if(_settings.RoundaboutAngles)
                DrawRoundaboutAngles();
        }
    }

    function moveNodeOut(sourceSegID, nodeID){
        let isANode = true;
        let curSeg = W.model.segments.getObjectById(sourceSegID);
        if(nodeID === curSeg.attributes.toNodeID)
            isANode = false;
        //Add geo point on the other segment
        let node = W.model.nodes.getObjectById(nodeID);
        let currNodePOS = node.geometry.clone();
        let otherSeg; //other RA segment that we are adding a geo point to
        let nodeSegs = [...W.model.nodes.getObjectById(nodeID).attributes.segIDs];
        nodeSegs = _.without(nodeSegs, sourceSegID); //remove the source segment from the node Segs - we need to find the segment that is a part of the RA that is after our source seg
        for(let i=0; i<nodeSegs.length; i++){
            let s = W.model.segments.getObjectById(nodeSegs[i]);
            if(s.attributes.junctionID){
                otherSeg = s;
                break;
            }
        }
        if(otherSeg.geometry.components.length > 2){
            let origNodeSegs = [...W.model.nodes.getObjectById(nodeID).attributes.segIDs];
            let originalLength = otherSeg.geometry.components.length;

            let newSegGeo = curSeg.geometry.clone();
            newSegGeo.components.splice((isANode ? 1 : newSegGeo.components.length - 1),0, new OpenLayers.Geometry.Point(currNodePOS.x, currNodePOS.y));
            //delete the geo point
            var multiaction = new MultiAction();
            multiaction.setModel(W.model);
            multiaction.doSubAction(new UpdateSegmentGeometry(curSeg, curSeg.geometry, newSegGeo));
            if((otherSeg.attributes.revDirection && !curSeg.attributes.revDirection) || (!otherSeg.attributes.revDirection && curSeg.attributes.revDirection))
                isANode = !isANode;

            //note and remove first geo point, move junction node to this point
            var newNodeGeometry = otherSeg.geometry.components[(isANode ? otherSeg.geometry.components.length - 2 : 1)].clone();
            newNodeGeometry.calculateBounds();
            let newGeo = otherSeg.geometry.clone();
            newGeo.components.splice((isANode ? -2 : 1),1);
            newGeo.components[0].calculateBounds();
            newGeo.components[originalLength-2].calculateBounds();

            multiaction.doSubAction(new UpdateSegmentGeometry(otherSeg, otherSeg.geometry, newGeo));

            //move the node
            var connectedSegObjs = {};
            var emptyObj = {};
            for(var j=0; j < origNodeSegs.length;j++){
                var segid = origNodeSegs[j];
                connectedSegObjs[segid] = W.model.segments.getObjectById(segid).geometry.clone();
            }
            multiaction.doSubAction(new MoveNode(node, node.geometry, newNodeGeometry,connectedSegObjs,emptyObj));
            W.model.actionManager.add(multiaction);

            if(_settings.RoundaboutAngles)
                DrawRoundaboutAngles();
        }
    }


    //Left
    function RAShiftLeftBtnClick(e){
        // this traps the click to prevent it falling through to the underlying area name element and potentially causing the map view to be relocated to that area...
        e.stopPropagation();

        //if(!pendingChanges){
        var segObj = WazeWrap.getSelectedFeatures()[0];
        var convertedCoords = WazeWrap.Geometry.ConvertTo4326(segObj.geometry.components[0].x, segObj.geometry.components[0].y);
        var gpsOffsetAmount = WazeWrap.Geometry.CalculateLongOffsetGPS(-$('#shiftAmount').val(), convertedCoords.lon, convertedCoords.lat);
        ShiftSegmentsNodesLong(segObj, gpsOffsetAmount);
        //}
    }
    //Right
    function RAShiftRightBtnClick(e){
        // this traps the click to prevent it falling through to the underlying area name element and potentially causing the map view to be relocated to that area...
        e.stopPropagation();

        //if(!pendingChanges){
        var segObj = WazeWrap.getSelectedFeatures()[0];
        var convertedCoords = WazeWrap.Geometry.ConvertTo4326(segObj.model.geometry.components[0].x, segObj.model.geometry.components[0].y);
        var gpsOffsetAmount = WazeWrap.Geometry.CalculateLongOffsetGPS($('#shiftAmount').val(), convertedCoords.lon, convertedCoords.lat);
        ShiftSegmentsNodesLong(segObj, gpsOffsetAmount);
        //}
    }
    //Up
    function RAShiftUpBtnClick(e){
        // this traps the click to prevent it falling through to the underlying area name element and potentially causing the map view to be relocated to that area...
        e.stopPropagation();

        //if(!pendingChanges){
        var segObj = WazeWrap.getSelectedFeatures()[0];
        var gpsOffsetAmount = WazeWrap.Geometry.CalculateLatOffsetGPS($('#shiftAmount').val(), WazeWrap.Geometry.ConvertTo4326(segObj.geometry.components[0].x, segObj.geometry.components[0].y));
        ShiftSegmentNodesLat(segObj, gpsOffsetAmount);
        //}
    }
    //Down
    function RAShiftDownBtnClick(e){
        // this traps the click to prevent it falling through to the underlying area name element and potentially causing the map view to be relocated to that area...
        e.stopPropagation();

        //if(!pendingChanges){
        var segObj = WazeWrap.getSelectedFeatures()[0];
        var gpsOffsetAmount = WazeWrap.Geometry.CalculateLatOffsetGPS(-$('#shiftAmount').val(), WazeWrap.Geometry.ConvertTo4326(segObj.geometry.components[0].x, segObj.geometry.components[0].y));
        ShiftSegmentNodesLat(segObj, gpsOffsetAmount);
        //}
    }

    //*************** Roundabout Angles **********************
    function DrawRoundaboutAngles(){
        //---------get or create layer
        var layers = W.map.getLayersBy("uniqueName","__DrawRoundaboutAngles");

        if(layers.length > 0)
            drc_layer = layers[0];
        else {
            var drc_style = new OpenLayers.Style({
                fillOpacity: 0.0,
                strokeOpacity: 1.0,
                fillColor: "#FF40C0",
                strokeColor: "${strokeColor}",
                strokeWidth: 10,
                fontWeight: "bold",
                pointRadius: 0,
                label : "${labelText}",
                fontFamily: "Tahoma, Courier New",
                labelOutlineColor: "#FFFFFF",
                labelOutlineWidth: 3,
                fontColor: "${labelColor}",
                fontSize: "10px"
            });

            drc_layer = new OpenLayers.Layer.Vector("Roundabout Angles", {
                displayInLayerSwitcher: true,
                uniqueName: "__DrawRoundaboutAngles",
                styleMap: new OpenLayers.StyleMap(drc_style)
            });

            I18n.translations[I18n.currentLocale()].layers.name["__DrawRoundaboutAngles"] = "Roundabout Angles";
            W.map.addLayer(drc_layer);

            drc_layer.setVisibility(true);
        }

        localStorage.WMERAEnabled = drc_layer.visibility;

        if (drc_layer.visibility == false) {
            drc_layer.removeAllFeatures();
            return;
        }

        if (W.map.getZoom() < 1) {
            drc_layer.removeAllFeatures();
            return;
        }

        //---------collect all roundabouts first
        var rsegments = {};

        for (var iseg in W.model.segments.objects) {
            let isegment = W.model.segments.getObjectById(iseg);
            var iattributes = isegment.attributes;
            var iline = isegment.geometry.id;

            let irid = iattributes.junctionID;

            if (iline !== null && irid != undefined) {
                var rsegs = rsegments[irid];
                if (rsegs == undefined)
                    rsegments[irid] = rsegs = new Array();
                rsegs.push(isegment);
            }
        }

        var drc_features = [];

        //-------for each roundabout do...
        for (let irid in rsegments) {
            let rsegs = rsegments[irid];

            let isegment = rsegs[0];
            var jsegment;

            var nodes = [];
            var nodes_x = [];
            var nodes_y = [];

            nodes = rsegs.map(seg => seg.attributes.fromNodeID); //get from nodes
            nodes = [...nodes, ...rsegs.map(seg => seg.attributes.toNodeID)]; //get to nodes add to from nodes
            nodes = _.uniq(nodes); //remove duplicates

            var node_objects = W.model.nodes.getByIds(nodes);
            nodes_x = node_objects.map(n => n.geometry.x); //get all x locations
            nodes_y = node_objects.map(n => n.geometry.y); //get all y locations

            var sr_x = 0;
            var sr_y = 0;
            var radius = 0;
            var numNodes = nodes_x.length;

            if (numNodes >= 1) {
                var ax = nodes_x[0];
                var ay = nodes_y[0];

                var junction = W.model.junctions.getObjectById(irid);
                var junction_coords = junction && junction.geometry && junction.geometry.coordinates;

                if (junction_coords && junction_coords.length == 2) {
                    //---------- get center point from junction model
                    let lonlat = new OpenLayers.LonLat(junction_coords[0], junction_coords[1]);
                    lonlat.transform(W.Config.map.projection.remote, W.Config.map.projection.local);
                    let pt = new OpenLayers.Geometry.Point(lonlat.lon, lonlat.lat);
                    sr_x = pt.x;
                    sr_y = pt.y;
                }
                else if (numNodes >= 3) {
                    //-----------simple approximation of centre point calculated from three first points
                    let bx = nodes_x[1];
                    let by = nodes_y[1];
                    let cx = nodes_x[2];
                    let cy = nodes_y[2];

                    let x1 = (bx + ax) * 0.5;
                    let y11 = (by + ay) * 0.5;
                    let dy1 = bx - ax;
                    let dx1 = -(by - ay);
                    let x2 = (cx + bx) * 0.5;
                    let y2 = (cy + by) * 0.5;
                    let dy2 = cx - bx;
                    let dx2 = -(cy - by);
                    sr_x = (y11 * dx1 * dx2 + x2 * dx1 * dy2 - x1 * dy1 * dx2 - y2 * dx1 * dx2)/ (dx1 * dy2 - dy1 * dx2);
                    sr_y = (sr_x - x1) * dy1 / dx1 + y11;
                }
                else {
                    //---------- simple bounds-based calculation of center point
                    var rbounds = new OpenLayers.Bounds();
                    rbounds.extend(isegment.geometry.bounds);
                    rbounds.extend(jsegment.geometry.bounds);

                    var center = rbounds.getCenterPixel();
                    sr_x = center.x;
                    sr_y = center.y;
                }

                var angles = [];
                var rr = -1;
                var r_ix;

                for(let i=0; i<nodes_x.length; i++) {

                    var dx = nodes_x[i] - sr_x;
                    var dy = nodes_y[i] - sr_y;

                    var rr2 = dx*dx + dy*dy;
                    if (rr < rr2) {
                        rr = rr2;
                        r_ix = i;
                    }

                    var angle = Math.atan2(dy, dx);
                    angle = (360.0 + (angle * 180.0 / Math.PI));
                    if (angle < 0.0) angle += 360.0;
                    if (angle > 360.0) angle -= 360.0;
                    angles.push(angle);
                }

                radius = Math.sqrt(rr);

                //---------sorting angles for calulating angle difference between two segments
                angles = angles.sort(function(a,b) { return a - b; });
                angles.push( angles[0] + 360.0);
                angles = angles.sort(function(a,b) { return a - b; });

                var drc_color = (numNodes <= 4) ? "#0040FF" : "#002080";

                var drc_point = new OpenLayers.Geometry.Point(sr_x, sr_y );
                var drc_circle = new OpenLayers.Geometry.Polygon.createRegularPolygon( drc_point, radius, 10 * W.map.getZoom() );
                var drc_feature = new OpenLayers.Feature.Vector(drc_circle, {labelText: "", labelColor: "#000000", strokeColor: drc_color, });
                drc_features.push(drc_feature);


                if (numNodes >= 2 && numNodes <= 4 && W.map.getZoom() >= 5) {
                    for(let i=0; i<nodes_x.length; i++) {
                        let ix = nodes_x[i];
                        let iy = nodes_y[i];
                        let startPt   = new OpenLayers.Geometry.Point( sr_x, sr_y );
                        let endPt     = new OpenLayers.Geometry.Point( ix, iy );
                        let line      = new OpenLayers.Geometry.LineString([startPt, endPt]);
                        let style     = {strokeColor:drc_color, strokeWidth:2};
                        let fea       = new OpenLayers.Feature.Vector(line, {}, style);
                        drc_features.push(fea);
                    }

                    var angles_int = [];
                    var angles_float = [];
                    var angles_sum = 0;

                    for(let i=0; i<angles.length - 1; i++) {

                        var ang = angles[i+1] - angles[i+0];
                        if (ang < 0) ang += 360.0;
                        if (ang < 0) ang += 360.0;

                        if (ang < 135.0)
                            ang = ang - 90.0;
                        else
                            ang = ang - 180.0;

                        angles_sum += parseInt(ang);

                        angles_float.push( ang );
                        angles_int.push( parseInt(ang) );
                    }

                    if (angles_sum > 45) angles_sum -= 90;
                    if (angles_sum > 45) angles_sum -= 90;
                    if (angles_sum > 45) angles_sum -= 90;
                    if (angles_sum > 45) angles_sum -= 90;
                    if (angles_sum < -45) angles_sum += 90;
                    if (angles_sum < -45) angles_sum += 90;
                    if (angles_sum < -45) angles_sum += 90;
                    if (angles_sum < -45) angles_sum += 90;
                    if (angles_sum != 0) {
                        for(let i=0; i<angles_int.length; i++) {
                            let a = angles_int[i];
                            let af = angles_float[i] - angles_int[i];
                            if ( (a < 10 || a > 20) && (af < -0.5 || af > 0.5)){
                                angles_int[i] += -angles_sum;

                                break;
                            }
                        }
                    }

                    if (numNodes == 2) {
                        angles_int[1] = -angles_int[0];
                        angles_float[1] = -angles_float[0];
                    }

                    for(let i=0; i<angles.length - 1; i++) {
                        let arad = (angles[i+0] + angles[i+1]) * 0.5 * Math.PI / 180.0;
                        let ex = sr_x + Math.cos (arad) * radius * 0.5;
                        let ey = sr_y + Math.sin (arad) * radius * 0.5;

                        //*** Angle Display Rounding ***
                        let angint = Math.round(angles_float[i] * 100)/100;

                        let kolor = "#004000";
                        if (angint <= -15 || angint >= 15) kolor = "#FF0000";
                        else if (angint <= -13 || angint >= 13) kolor = "#FFC000";

                        let pt = new OpenLayers.Geometry.Point(ex, ey);
                        drc_features.push(new OpenLayers.Feature.Vector( pt, {labelText: (angint + "°"), labelColor: kolor } ));
                        //drc_features.push(new OpenLayers.Feature.Vector( pt, {labelText: (+angles_float[i].toFixed(2) + "°"), labelColor: kolor } ));
                    }
                }
                else {
                    for(let i=0; i < nodes_x.length; i++) {
                        let ix = nodes_x[i];
                        let iy = nodes_y[i];
                        let startPt = new OpenLayers.Geometry.Point( sr_x, sr_y );
                        let endPt = new OpenLayers.Geometry.Point( ix, iy );
                        let line = new OpenLayers.Geometry.LineString([startPt, endPt]);
                        let style = {strokeColor:drc_color, strokeWidth:2};
                        let fea = new OpenLayers.Feature.Vector(line, {}, style);
                        drc_features.push(fea);
                    }
                }

                let p1 = new OpenLayers.Geometry.Point( nodes_x[r_ix], nodes_y[r_ix] );
                let p2 = new OpenLayers.Geometry.Point( sr_x, sr_y );
                let line = new OpenLayers.Geometry.LineString([p1, p2]);
                let geo_radius = line.getGeodesicLength(W.map.getProjectionObject());

                let diam = geo_radius * 2.0;
                let pt = new OpenLayers.Geometry.Point(sr_x, sr_y);
                drc_features.push(new OpenLayers.Feature.Vector( pt, {labelText: (diam.toFixed(0) + "m"), labelColor: "#000000" } ));

            }

        }

        drc_layer.removeAllFeatures();
        drc_layer.addFeatures(drc_features);
    }

    function injectCss() {
        var css = [
            '.btnMoveNode {width=25px; height=25px; background-color:#92C3D3; cursor:pointer; padding:5px; font-size:14px; border:thin outset black; border-style:solid; border-width: 1px;border-radius:50%; -moz-border-radius:50%; -webkit-border-radius:50%; box-shadow:inset 0px 0px 20px -14px rgba(0,0,0,1); -moz-box-shadow:inset 0px 0px 20px -14px rgba(0,0,0,1); -webkit-box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);}',
            '.btnRotate { width=45px; height=45px; background-color:#92C3D3; cursor:pointer; padding: 5px; font-size:14px; border:thin outset black; border-style:solid; border-width: 1px;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);-moz-box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);-webkit-box-shadow: inset 0px 0px 20px -14px rgba(0,0,0,1);}'
        ].join(' ');
        $('<style type="text/css">' + css + '</style>').appendTo('head');
    }

})();

