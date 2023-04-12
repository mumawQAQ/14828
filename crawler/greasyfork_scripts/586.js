// ==UserScript==
// @name        Create room with unlisted at character.ai
// @namespace   https://sleazyfork.org/en/users/927364-mozgovlom
// @match       https://beta.character.ai/room/create*
// @grant       none
// @version     1.0
// @author      Mozgovlom
// @description Adds a form on the room creation page to create a room with unlisted characters.
// @icon        https://characterai.io/static/logo512.png


// ==/UserScript==
'use strict';


//--------------------------------------------------------------------------------------------------------------------------------------------------------
const createRoom = async function (RoomName, RoomTopic, ...characters) {

  const cachedToken = JSON.parse(localStorage.getItem('char_token')).value;

  const response = await fetch("https://beta.character.ai/chat/room/create/", {
    "credentials": "include",
    "headers": {
      "Authorization": `Token ${cachedToken}`,
      "Content-Type": "application/json",
    },
    "referrer": "https://beta.character.ai/room/create?",
    "body": JSON.stringify({
      "characters": characters.map(id => ({
        "value": `${id}`,
        "label": "Name (@author)"
      })),
      "name": RoomName,
      "topic": RoomTopic,
      "visibility": "PRIVATE"
    }),
    "method": "POST"
  });
  const {
    room: {
      external_id
    }
  } = await response.json();
  location.href = `https://beta.character.ai/chat?hist=${external_id}`;
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------


window.addEventListener('load', function() {

  let styleAddRoom = document.createElement('style');
  styleAddRoom.classList.add("styleAddRoom");
  styleAddRoom.innerHTML=`
  .Create-Room-Frame {
    border: 3px solid gray;
    padding: 4px;
    width: 660px;
    position: absolute;
    bottom: 1%;
    left: 35%;
    color: black;
    text-align: center;
    z-index: 1;
    margin: 0 0 0 4px;
    border-radius: 0 0 0 0;
    display: flex;
    flex-direction: column;
    background-color: var(--bs-body-bg);
  }
  .Create-Room-Button {
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    background-color: lightsteelblue;
    text-decoration: none;
    border: 3px solid gray;
    border-radius: 0 0 0 0;
    padding: 4px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4px;
    margin-bottom: 4px;
    width: 200px;
  }
  .Create-Room-Button:hover {
    background-color: #789ac7;
  }
  .Create-Room-input {
    user-select: none;
    padding: 4px;
    resize: none;
    width: 600px;
    height: 2em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4px;
    margin-bottom: 4px;
    text-align: center;
    border-radius: 0 0 0 0;
    overflow: auto;
  }
  .Create-Room-Info {
    user-select: text;
    font-weight: bold;
  }
  `
  document.body.appendChild(styleAddRoom);

  let frameRoomCreation = document.createElement('div');
  frameRoomCreation.classList.add("Create-Room-Frame");
  document.body.appendChild(frameRoomCreation);

  let textareaRoomName = document.createElement('span');
  textareaRoomName.innerHTML = "Room Name";
  textareaRoomName.classList.add("Create-Room-Info");
  frameRoomCreation.appendChild(textareaRoomName);

  let textareaRoomCreationName = document.createElement('input');
  textareaRoomCreationName.setAttribute("placeholder", "3-20 symbols; only letters, numbers, underscore, dash and space");
  textareaRoomCreationName.setAttribute("maxlength", "20");
  textareaRoomCreationName.classList.add("Create-Room-input");
  frameRoomCreation.appendChild(textareaRoomCreationName);

  let textareaRoomHint = document.createElement('span');
  textareaRoomHint.innerHTML = "'character_external_id' as in https://beta.character.ai/chat?char=***";
  textareaRoomHint.classList.add("Create-Room-Info");
  frameRoomCreation.appendChild(textareaRoomHint);

  let textareaRoomCreation1 = document.createElement('input');
  textareaRoomCreation1.setAttribute("placeholder", "charid1 (required)");
  textareaRoomCreation1.classList.add("Create-Room-input");
  textareaRoomCreation1.setAttribute("required", "");
  frameRoomCreation.appendChild(textareaRoomCreation1);

  let textareaRoomCreation2 = document.createElement('input');
  textareaRoomCreation2.setAttribute("placeholder", "charid2 (optional)");
  textareaRoomCreation2.classList.add("Create-Room-input");
  frameRoomCreation.appendChild(textareaRoomCreation2);

  let textareaRoomCreation3 = document.createElement('input');
  textareaRoomCreation3.setAttribute("placeholder", "charid3 (optional)");
  textareaRoomCreation3.classList.add("Create-Room-input");
  frameRoomCreation.appendChild(textareaRoomCreation3);

  let textareaRoomCreation4 = document.createElement('input');
  textareaRoomCreation4.setAttribute("placeholder", "charid4 (optional)");
  textareaRoomCreation4.classList.add("Create-Room-input");
  frameRoomCreation.appendChild(textareaRoomCreation4);

  let textareaRoomCreation5 = document.createElement('input');
  textareaRoomCreation5.setAttribute("placeholder", "charid5 (optional)");
  textareaRoomCreation5.classList.add("Create-Room-input");
  frameRoomCreation.appendChild(textareaRoomCreation5);

  let textareaRoomTopic = document.createElement('span');
  textareaRoomTopic.innerHTML = "Room Topic";
  textareaRoomTopic.classList.add("Create-Room-Info");
  frameRoomCreation.appendChild(textareaRoomTopic);

  let textareaRoomCreationTopic = document.createElement('textarea');
  textareaRoomCreationTopic.setAttribute("placeholder", "0-500 symbols (optional)");
  textareaRoomCreationTopic.style.cssText = "min-height: 10em;";
  textareaRoomCreationTopic.setAttribute("maxlength", "500");
  textareaRoomCreationTopic.classList.add("Create-Room-input");
  frameRoomCreation.appendChild(textareaRoomCreationTopic);

  let buttonRoomCreation = document.createElement('div');
  buttonRoomCreation.innerHTML = "Create Room";
  buttonRoomCreation.classList.add("Create-Room-Button");
  frameRoomCreation.appendChild(buttonRoomCreation);
  buttonRoomCreation.onclick = function (){
    let characters_array = [textareaRoomCreation1.value, textareaRoomCreation2.value, textareaRoomCreation3.value, textareaRoomCreation4.value, textareaRoomCreation5.value];
    if (!textareaRoomCreationName.value) {textareaRoomCreationName.value = "Room with unlisted"};
    createRoom(textareaRoomCreationName.value, textareaRoomCreationTopic.value, ...characters_array);
  };

}, false);