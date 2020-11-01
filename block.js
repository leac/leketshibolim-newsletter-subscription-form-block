(function (blocks, editor, i18n, element, components, _) {
    var __ = i18n.__;
    var el = element.createElement;

    var blockStyle = {
        backgroundColor: '#900',
        color: '#fff',
        padding: '20px',
    };

    blocks.registerBlockType('leketshibolim-plugins/leketshibolim-newsletter-subscription-form', {
        title: __('Newletter Subscription form', 'lnsf'),
        icon: 'index-card',
        category: 'layout',
        example: {},

        edit: function () {
            return el("aside", null,
                [
                    el("h3", null, __('Email Updates', 'lnsf')),
                    el("div", {id: "mc_embed_signup"},
                        [
                            el("form", {
                                    id: "mc-embedded-subscribe-form",
                                    class: "validate",
                                    action: "https://ort.us16.list-manage.com/subscribe/post?u=1704fbff45e42de1cf76fc0dd&id=36a48b7823",
                                    method: "post",
                                    name: "mc-embedded-subscribe-form",
                                    target: "_blank"
                                },
                                [el("div", {id: "mc_embed_signup_scroll"},
                                    [
                                        el("div", null, __('Like reading lists? Want to get updates on code I\'ve written? You can get those in exchange for your email address', 'lnsf')),
                                        el("div", {class: "mc-field-group"}, [
                                            el("label", {for:"mce-EMAIL"}, __('Email address', 'lnsf')),
                                            el("input", {
                                                id: "mce-EMAIL",
                                                class: "required email",
                                                name: "EMAIL",
                                                type: "email",
                                                value: "",
                                                placeholder: __('Your email address', 'lnsf')
                                            }),
                                            el("input", {
                                                id: "mc-embedded-subscribe",
                                                class: "button",
                                                name: "subscribe",
                                                type: "submit",
                                                value: __('Subscribe', 'lnsf')
                                            })
                                        ]),
                                        el("div", {id: "mce-responses", class: "clear"}, [
                                            el("div", {id: "mce-error-response", class: "response"}),
                                            el("div", {id: "mce-success-response", class: "response"})
                                        ]),
                                        el("div", {class: "captcha-hidden"}, [
                                            el("input", {
                                                tabindex: "-1",
                                                name: "b_1704fbff45e42de1cf76fc0dd_36a48b7823",
                                                type: "text"
                                            })
                                        ])
                                    ])
                                ]
                            ),
                            el("script", null,
                                `jQuery('body')on('DOMSubtreeModified','#mce-success-response',function(e){
                                    if (jQuery(this)html()=='Thank you for subscribing!'){
                                        jQuery(this)html('תודה על הרשמתך!');
                                    }
                                 });`
                            )
                        ])
                ])
                ;
        },
        save: function () {
            return el("aside", null,
                [
                    el("h3", null, __('Email Updates', 'lnsf')),
                    el("div", {id: "mc_embed_signup"},
                        [
                            el("form", {
                                    id: "mc-embedded-subscribe-form",
                                    class: "validate",
                                    action: "https://ort.us16.list-manage.com/subscribe/post?u=1704fbff45e42de1cf76fc0dd&id=36a48b7823",
                                    method: "post",
                                    name: "mc-embedded-subscribe-form",
                                    target: "_blank"
                                },
                                [el("div", {id: "mc_embed_signup_scroll"},
                                    [
                                        el("div", null, __('Like reading lists? Want to get updates on code I\'ve written? You can get those in exchange for your email address', 'lnsf')),
                                        el("div", {class: "mc-field-group"}, [
                                            el("label", {for:"mce-EMAIL"}, __('Email address', 'lnsf')),
                                            el("input", {
                                                id: "mce-EMAIL",
                                                class: "required email",
                                                name: "EMAIL",
                                                type: "email",
                                                value: "",
                                                placeholder: __('Your email address', 'lnsf')
                                            }),
                                            el("input", {
                                                id: "mc-embedded-subscribe",
                                                class: "button",
                                                name: "subscribe",
                                                type: "submit",
                                                value: __('Subscribe', 'lnsf')
                                            })
                                        ]),
                                        el("div", {id: "mce-responses", class: "clear"}, [
                                            el("div", {id: "mce-error-response", class: "response"}),
                                            el("div", {id: "mce-success-response", class: "response"})
                                        ]),
                                        el("div", {class: "captcha-hidden"}, [
                                            el("input", {
                                                tabindex: "-1",
                                                name: "b_1704fbff45e42de1cf76fc0dd_36a48b7823",
                                                type: "text"
                                            })
                                        ])
                                    ])
                                ]
                            ),
                            el("script", null,
                                `jQuery('body')on('DOMSubtreeModified','#mce-success-response',function(e){
                                    if (jQuery(this)html()=='Thank you for subscribing!'){
                                        jQuery(this)html('תודה על הרשמתך!');
                                    }
                                 });`
                            )
                        ])
                ])
                ;
        },
    });
})(
    window.wp.blocks,
    window.wp.editor,
    window.wp.i18n,
    window.wp.element,
    window.wp.components,
    window._
);
