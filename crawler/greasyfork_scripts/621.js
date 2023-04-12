/* ==UserStyle==
@name           PimEyes Crack
@namespace      github.com/PinkDev1/PimEyes-Crack-UserStyle
@version        4.1.0
@description    Allows easier use of the FREE version of PimEyes
@author         PinkDev1
==/UserStyle== */

@-moz-document regexp("https:\\/\\/pimeyes.com\\/.{2}") {

    /*Un-blur the URLs*/
    .blurred-source-url{
        user-select: all !important;;
    }

    /*Make the URLs selectable, and visible*/
    *.url{
        filter: none !important;;
        overflow: visible !important;;
        user-select: initial !important;;
        max-width: initial !important;;
        pointer-events: none !important;;
        position: initial !important;
    }

    /*Remove the Buy Premium overlay on images*/
    .zoom {
        display: none !important;;
    }
    
    /*Remove the actions menu, so we can select the image*/
    .actions {
        display: none !important;;
    }
    

    /*Hide UNLOCK buttons*/
    button[type="button"] {
        display: none !important;;
    }
    
    /*un-hide add picture button*/
    button[class="spacer"] {
        display: inherit !important;;
    }
    
    /*un-hide upload photo button*/
    button[class="first"], button[class="spacer upload"], button[class="last"]{
        display: inherit !important;;
    }
    
    /*Remove events from image*/
    div.thumbnail {
        pointer-events: none !important;;
    }
}