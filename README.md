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

[
    {
        "title": "Page 1 title",
        "templateName": "page1.html"
    },
    {
        "title": "Page 2 title",
        "templateName": "page2.html"
    }
]

You can :
  - add or remove object, to add or remove steps in modal box, without editing code.
  
### Feature

  - Next and previous, for transition in between steps
  - Hard Keys support for next and previous transitions


