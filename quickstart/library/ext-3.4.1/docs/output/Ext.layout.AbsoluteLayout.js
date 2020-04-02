Ext.data.JsonP.Ext_layout_AbsoluteLayout({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":[],"extends":"Ext.layout.AnchorLayout","uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='docClass'>Ext.layout.ContainerLayout</a><div class='subclass '><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='docClass'>Ext.layout.AnchorLayout</a><div class='subclass '><strong>Ext.layout.AbsoluteLayout</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/AbsoluteLayout.html#Ext-layout-AbsoluteLayout' target='_blank'>AbsoluteLayout.js</a></div></pre><div class='doc-contents'><p>This is a layout that inherits the anchoring of <b><a href=\"#!/api/Ext.layout.AnchorLayout\" rel=\"Ext.layout.AnchorLayout\" class=\"docClass\">Ext.layout.AnchorLayout</a></b> and adds the\nability for x/y positioning using the standard x and y component config options.</p>\n\n\n<p>This class is intended to be extended or created via the <tt><b><a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">layout</a></b></tt>\nconfiguration property.  See <tt><b><a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">Ext.Container.layout</a></b></tt> for additional details.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var form = new <a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">Ext.form.FormPanel</a>({\n    title: 'Absolute Layout',\n    layout:'absolute',\n    layoutConfig: {\n        // layout-specific configs go here\n        extraCls: 'x-abs-layout-item',\n    },\n    baseCls: 'x-plain',\n    url:'save-form.php',\n    defaultType: 'textfield',\n    items: [{\n        x: 0,\n        y: 5,\n        xtype:'label',\n        text: 'Send To:'\n    },{\n        x: 60,\n        y: 0,\n        name: 'to',\n        anchor:'100%'  // anchor width by percentage\n    },{\n        x: 0,\n        y: 35,\n        xtype:'label',\n        text: 'Subject:'\n    },{\n        x: 60,\n        y: 30,\n        name: 'subject',\n        anchor: '100%'  // anchor width by percentage\n    },{\n        x:0,\n        y: 60,\n        xtype: 'textarea',\n        name: 'msg',\n        anchor: '100% 100%'  // anchor width and height\n    }]\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-anchor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-cfg-anchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-cfg-anchor' class='name expandable'>anchor</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>This configuation option is to be applied to child items of a container managed by\nthis layout (ie. ...</div><div class='long'><p>This configuation option is to be applied to <b>child <tt>items</tt></b> of a container managed by\nthis layout (ie. configured with <tt>layout:'anchor'</tt>).</p>\n\n\n<br/>\n\n\n\n\n<p>This value is what tells the layout how an item should be anchored to the container. <tt>items</tt>\nadded to an AnchorLayout accept an anchoring-specific config property of <b>anchor</b> which is a string\ncontaining two values: the horizontal anchor value and the vertical anchor value (for example, '100% 50%').\nThe following types of anchor values are supported:<div class=\"mdetail-params\"><ul>\n\n<li><b>Percentage</b> : Any value between 1 and 100, expressed as a percentage.<div class=\"sub-desc\">\nThe first anchor is the percentage width that the item should take up within the container, and the\nsecond is the percentage height.  For example:\n<pre><code>// two values specified\nanchor: '100% 50%' // render item complete width of the container and\n                   // 1/2 height of the container\n// one value specified\nanchor: '100%'     // the width value; the height will default to auto\n</code></pre></div></li>\n\n<li><b>Offsets</b> : Any positive or negative integer value.<div class=\"sub-desc\">\nThis is a raw adjustment where the first anchor is the offset from the right edge of the container,\nand the second is the offset from the bottom edge. For example:\n<pre><code>// two values specified\nanchor: '-50 -100' // render item the complete width of the container\n                   // minus 50 pixels and\n                   // the complete height minus 100 pixels.\n// one value specified\nanchor: '-50'      // anchor value is assumed to be the right offset value\n                   // bottom offset will default to 0\n</code></pre></div></li>\n\n<li><b>Sides</b> : Valid values are <tt>'right'</tt> (or <tt>'r'</tt>) and <tt>'bottom'</tt>\n(or <tt>'b'</tt>).<div class=\"sub-desc\">\nEither the container must have a fixed size or an anchorSize config value defined at render time in\norder for these to have any effect.</div></li>\n\n<li><b>Mixed</b> : <div class=\"sub-desc\">\nAnchor values can also be mixed as needed.  For example, to render the width offset from the container\nright edge by 50 pixels and 75% of the container's height use:\n<pre><code>anchor: '-50 75%'\n</code></pre></div></li>\n\n\n</ul></div>\n\n</p></div></div></div><div id='cfg-defaultAnchor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-cfg-defaultAnchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-cfg-defaultAnchor' class='name expandable'>defaultAnchor</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>default anchor for all child container items applied if no anchor or specific width is set on the child item. ...</div><div class='long'><p>default anchor for all child container items applied if no anchor or specific width is set on the child item.  Defaults to '100%'.</p>\n<p>Defaults to: <code>'100%'</code></p></div></div></div><div id='cfg-extraCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AbsoluteLayout'>Ext.layout.AbsoluteLayout</span><br/><a href='source/AbsoluteLayout.html#Ext-layout-AbsoluteLayout-cfg-extraCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AbsoluteLayout-cfg-extraCls' class='name expandable'>extraCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-ctCls\" rel=\"Ext.Component-cfg-ctCls\" class=\"docClass\">ctCls</a> also.</p>\n\n\n<p><b>Note</b>: <tt>extraCls</tt> defaults to <tt>''</tt> except for the following classes\nwhich assign a value by default:\n<div class=\"mdetail-params\"><ul>\n<li><a href=\"#!/api/Ext.layout.AbsoluteLayout\" rel=\"Ext.layout.AbsoluteLayout\" class=\"docClass\">Absolute Layout</a> : <tt>'x-abs-layout-item'</tt></li>\n<li>Box Layout : <tt>'x-box-item'</tt></li>\n<li><a href=\"#!/api/Ext.layout.ColumnLayout\" rel=\"Ext.layout.ColumnLayout\" class=\"docClass\">Column Layout</a> : <tt>'x-column'</tt></li>\n</ul></div>\nTo configure the above Classes with an extra CSS class append to the default.  For example,\nfor ColumnLayout:\n<pre><code>extraCls: 'x-column custom-class'\n</code></pre>\n</p>\n\n<p>Defaults to: <code>'x-abs-layout-item'</code></p><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-cfg-extraCls' rel='Ext.layout.ContainerLayout-cfg-extraCls' class='docClass'>Ext.layout.ContainerLayout.extraCls</a></p></div></div></div><div id='cfg-renderHidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-cfg-renderHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-renderHidden' class='name not-expandable'>renderHidden</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to hide each contained item on render (defaults to false).</p>\n</div><div class='long'><p>True to hide each contained item on render (defaults to false).</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fieldTpl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-fieldTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-fieldTpl' class='name expandable'>fieldTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The Ext.Template used by Field rendering layout classes (such as\nExt.layout.FormLayout) to create the DOM structure o...</div><div class='long'><p>The <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> used by Field rendering layout classes (such as\n<a href=\"#!/api/Ext.layout.FormLayout\" rel=\"Ext.layout.FormLayout\" class=\"docClass\">Ext.layout.FormLayout</a>) to create the DOM structure of a fully wrapped,\nlabeled and styled form Field. A default Template is supplied, but this may be\noverriden to create custom field structures. The template processes values returned from\n<a href=\"#!/api/Ext.layout.FormLayout-method-getTemplateArgs\" rel=\"Ext.layout.FormLayout-method-getTemplateArgs\" class=\"docClass\">Ext.layout.FormLayout.getTemplateArgs</a>.</p>\n</div></div></div><div id='property-getLayoutTargetSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-getLayoutTargetSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-getLayoutTargetSize' class='name not-expandable'>getLayoutTargetSize</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Placeholder for the derived layouts</p>\n</div><div class='long'><p>Placeholder for the derived layouts</p>\n</div></div></div><div id='property-monitorResize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-property-monitorResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-property-monitorResize' class='name expandable'>monitorResize</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>true</code></p><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-property-monitorResize' rel='Ext.layout.ContainerLayout-property-monitorResize' class='docClass'>Ext.layout.ContainerLayout.monitorResize</a></p></div></div></div><div id='property-parseAnchorRE' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-property-parseAnchorRE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-property-parseAnchorRE' class='name expandable'>parseAnchorRE</a><span> : RegExp</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/^(r|right|b|bottom)$/i</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AbsoluteLayout'>Ext.layout.AbsoluteLayout</span><br/><a href='source/AbsoluteLayout.html#Ext-layout-AbsoluteLayout-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AbsoluteLayout-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'absolute'</code></p><p>Overrides: <a href='#!/api/Ext.layout.AnchorLayout-property-type' rel='Ext.layout.AnchorLayout-property-type' class='docClass'>Ext.layout.AnchorLayout.type</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.ContainerLayout-method-constructor' class='name expandable'>Ext.layout.AbsoluteLayout</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">Ext.layout.ContainerLayout</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">Ext.layout.ContainerLayout</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-IEMeasureHack' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-IEMeasureHack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-IEMeasureHack' class='name expandable'>IEMeasureHack</a>( <span class='pre'>target, viewFlag</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Workaround for how IE measures autoWidth elements. ...</div><div class='long'><p>Workaround for how IE measures autoWidth elements.  It prefers bottom-up measurements</p>\n\n<pre><code> whereas other browser prefer top-down.  We will hide all target child elements before we measure and\n put them back to get an accurate measurement.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>viewFlag</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-adjustHeightAnchor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AbsoluteLayout'>Ext.layout.AbsoluteLayout</span><br/><a href='source/AbsoluteLayout.html#Ext-layout-AbsoluteLayout-method-adjustHeightAnchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AbsoluteLayout-method-adjustHeightAnchor' class='name expandable'>adjustHeightAnchor</a>( <span class='pre'>value, comp</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>comp</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.AnchorLayout-method-adjustHeightAnchor' rel='Ext.layout.AnchorLayout-method-adjustHeightAnchor' class='docClass'>Ext.layout.AnchorLayout.adjustHeightAnchor</a></p></div></div></div><div id='method-adjustWidthAnchor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AbsoluteLayout'>Ext.layout.AbsoluteLayout</span><br/><a href='source/AbsoluteLayout.html#Ext-layout-AbsoluteLayout-method-adjustWidthAnchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AbsoluteLayout-method-adjustWidthAnchor' class='name expandable'>adjustWidthAnchor</a>( <span class='pre'>value, comp</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>comp</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.AnchorLayout-method-adjustWidthAnchor' rel='Ext.layout.AnchorLayout-method-adjustWidthAnchor' class='docClass'>Ext.layout.AnchorLayout.adjustWidthAnchor</a></p></div></div></div><div id='method-afterRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-afterRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-afterRemove' class='name expandable'>afterRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-configureItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-configureItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-configureItem' class='name expandable'>configureItem</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Applies extraCls and hides the item if renderHidden is true ...</div><div class='long'><p>Applies extraCls and hides the item if renderHidden is true</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Destroys this layout. ...</div><div class='long'><p>Destroys this layout. This is a template method that is empty by default, but should be implemented\nby subclasses that require explicit destruction to purge event handlers or remove DOM nodes.</p>\n</div></div></div><div id='method-getLayoutTargetSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-method-getLayoutTargetSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-method-getLayoutTargetSize' class='name expandable'>getLayoutTargetSize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getRenderedItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-getRenderedItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-getRenderedItems' class='name expandable'>getRenderedItems</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private. ...</div><div class='long'><p>private.\nGet all rendered items to lay out.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isValidParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-isValidParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-isValidParent' class='name expandable'>isValidParent</a>( <span class='pre'>c, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-layout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-layout' class='name expandable'>layout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AbsoluteLayout'>Ext.layout.AbsoluteLayout</span><br/><a href='source/AbsoluteLayout.html#Ext-layout-AbsoluteLayout-method-onLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AbsoluteLayout-method-onLayout' class='name expandable'>onLayout</a>( <span class='pre'>ct, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.AnchorLayout-method-onLayout' rel='Ext.layout.AnchorLayout-method-onLayout' class='docClass'>Ext.layout.AnchorLayout.onLayout</a></p></div></div></div><div id='method-onRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onResize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-onResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-onResize' class='name expandable'>onResize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-parseAnchor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-method-parseAnchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-method-parseAnchor' class='name expandable'>parseAnchor</a>( <span class='pre'>a, start, cstart</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>start</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cstart</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseMargins' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-parseMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-parseMargins' class='name expandable'>parseMargins</a>( <span class='pre'>v</span> ) : Object</div><div class='description'><div class='short'>Parses a number or string representing margin sizes into an object. ...</div><div class='long'><p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The encoded margins</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with margin sizes for top, right, bottom and left</p>\n</div></li></ul></div></div></div><div id='method-renderAll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'>ct, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-renderItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-renderItem' class='name expandable'>renderItem</a>( <span class='pre'>c, position, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Renders the given Component into the target Element. ...</div><div class='long'><p>Renders the given Component into the target Element. If the Component is already rendered,\nit is moved to the provided target instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component to render</p>\n\n</div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The position within the target to render the item to</p>\n\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target Element</p>\n\n</div></li></ul></div></div></div><div id='method-runLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-runLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-runLayout' class='name expandable'>runLayout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-setContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-setContainer' class='name expandable'>setContainer</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":["Ext.layout.ContainerLayout","Ext.layout.AnchorLayout"],"meta":{},"requires":[],"html_meta":{},"statics":{"property":[],"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"AbsoluteLayout.html#Ext-layout-AbsoluteLayout","filename":"AbsoluteLayout.js"}],"linenr":1,"members":{"property":[{"tagname":"property","owner":"Ext.layout.ContainerLayout","meta":{},"name":"fieldTpl","id":"property-fieldTpl"},{"tagname":"property","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"getLayoutTargetSize","id":"property-getLayoutTargetSize"},{"tagname":"property","owner":"Ext.layout.AnchorLayout","meta":{"private":true},"name":"monitorResize","id":"property-monitorResize"},{"tagname":"property","owner":"Ext.layout.AnchorLayout","meta":{"private":true},"name":"parseAnchorRE","id":"property-parseAnchorRE"},{"tagname":"property","owner":"Ext.layout.AbsoluteLayout","meta":{"private":true},"name":"type","id":"property-type"}],"cfg":[{"tagname":"cfg","owner":"Ext.layout.AnchorLayout","meta":{},"name":"anchor","id":"cfg-anchor"},{"tagname":"cfg","owner":"Ext.layout.AnchorLayout","meta":{},"name":"defaultAnchor","id":"cfg-defaultAnchor"},{"tagname":"cfg","owner":"Ext.layout.AbsoluteLayout","meta":{},"name":"extraCls","id":"cfg-extraCls"},{"tagname":"cfg","owner":"Ext.layout.ContainerLayout","meta":{},"name":"renderHidden","id":"cfg-renderHidden"}],"css_var":[],"method":[{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"IEMeasureHack","id":"method-IEMeasureHack"},{"tagname":"method","owner":"Ext.layout.AbsoluteLayout","meta":{"private":true},"name":"adjustHeightAnchor","id":"method-adjustHeightAnchor"},{"tagname":"method","owner":"Ext.layout.AbsoluteLayout","meta":{"private":true},"name":"adjustWidthAnchor","id":"method-adjustWidthAnchor"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"afterRemove","id":"method-afterRemove"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"configureItem","id":"method-configureItem"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"protected":true,"private":true},"name":"destroy","id":"method-destroy"},{"tagname":"method","owner":"Ext.layout.AnchorLayout","meta":{"private":true},"name":"getLayoutTargetSize","id":"method-getLayoutTargetSize"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"getRenderedItems","id":"method-getRenderedItems"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"isValidParent","id":"method-isValidParent"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"layout","id":"method-layout"},{"tagname":"method","owner":"Ext.layout.AbsoluteLayout","meta":{"private":true},"name":"onLayout","id":"method-onLayout"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"onRemove","id":"method-onRemove"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"onResize","id":"method-onResize"},{"tagname":"method","owner":"Ext.layout.AnchorLayout","meta":{"private":true},"name":"parseAnchor","id":"method-parseAnchor"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{},"name":"parseMargins","id":"method-parseMargins"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"renderAll","id":"method-renderAll"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"renderItem","id":"method-renderItem"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"runLayout","id":"method-runLayout"},{"tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"name":"setContainer","id":"method-setContainer"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Ext.layout.AbsoluteLayout","singleton":false,"override":null,"inheritdoc":null,"id":"class-Ext.layout.AbsoluteLayout","mixins":[],"mixedInto":[]});