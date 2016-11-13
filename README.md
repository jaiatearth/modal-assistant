# Modal Assistant

![Sample-Modal-Image](https://github.com/jay-git/modal-assistant/blob/master/design/step1.png)

Library to create Modal window inside any html.

### Usage


`<div id="myLightBox"> </div>`

Add the javascript to the document  
`<script src="modal.js"></script>
<script>
    modalCreate("#myLightBox");
</script>`

### Configuration

template.json

{
    "modalConfig": [
        {
            "title": "PROFILE",
            "templateName": "step-0.html"
        },
        {
            "title": "PERSONAL",
            "templateName": "step-1.html"
        }
    ],
    "nextEvents": [
        97,98
    ],
    "prevEvents": [
        99,100
    ]
}

### You can
  - Modal window will be rendered based on the JSON configuraion.
  - Can hook the next/previous events with nextEvents/prevEvents by specifying the ASCII code of characters
  


