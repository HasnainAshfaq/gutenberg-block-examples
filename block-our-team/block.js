(function(blocks, i18n, element, _) {
    var el = element.createElement;
    var children = blocks.source.children;
    var attr = blocks.source.attr;

    blocks.registerBlockType('gb/block-our-team', {
        title: i18n.__('Block: Team member'),
        icon: 'admin-users',
        category: 'common',
        attributes: {
            mediaID: {
                type: 'number',
            },
            mediaURL: {
                type: 'string',
                source: 'attribute',
                selector: 'img',
                attribute: 'src',
            },

            member: {
                type: 'array',
                source: 'children',
                selector: '.member1',
            },


        },
        edit: function(props) {
            var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
            var attributes = props.attributes;
            var onSelectImage = (media) => {
                props.setAttributes({
                    mediaURL: media.url,
                    mediaID: media.id,
                });
            };


            return (
                el('div', { className: props.className },

                    el('div', { className: 'member-image' },
                        el(blocks.MediaUploadButton, {
                                buttonProps: {
                                    className: attributes.mediaID ?
                                        'image-button' : 'components-button button button-large',
                                },
                                onSelect: onSelectImage,
                                type: 'image',
                                value: attributes.mediaID,
                            },
                            attributes.mediaID ?
                            el('img', { src: attributes.mediaURL }) :
                            'Team Member Image'
                        ),
                    ),
                    el(blocks.Editable, {
                        tagName: 'p',
                        placeholder: i18n.__('Team member name here'),
                        value: attributes.member,
                        onChange: function(value) {
                            props.setAttributes({ member: value });
                        },
                        focus: focusedEditable === 'member' ? focus : null,
                        onFocus: function(focus) {
                            props.setFocus(_.extend({}, focus, { editable: 'member' }));
                        },
                        className: 'member',
                    }),



                )
            );
        },
        save: function(props) {
            var attributes = props.attributes;

            return (
                el('div', { className: props.className },

                    attributes.mediaURL &&
                    el('div', { className: 'member-image' },
                        el('img', { src: attributes.mediaURL }),
                    ),
                    el('p', { className: 'member' }, attributes.member),



                )
            );
        },
    });

})(
    window.wp.blocks,
    window.wp.i18n,
    window.wp.element,
    window._,
)