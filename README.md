# Modal Assistant

![Sample-Modal-Image](https://github.com/jay-git/modal-assistant/blob/master/design/step1.png)

Library to create Modal window inside any html.

### Usage

<dl>
<div id="myLightBox"></div>
</dl>

Add the javascript to the document  
<script src="modal.js"></script>
<script>
    modalCreate("#myLightBox");
</script>

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
  - add or remove object to add/remove steps in modal box.
