/// <reference path="../../typings/mithril/mithril.d.ts" />

export class FormInputState {
    public focused:_mithril.MithrilProperty<boolean>;
    public error:_mithril.MithrilProperty<string>;
    public value:_mithril.MithrilProperty<string>;
    public type:_mithril.MithrilProperty<string>;
    public disabled:_mithril.MithrilProperty<boolean>;

    constructor() {
        this.focused = m.prop(false);
        this.error = m.prop('');
        this.value = m.prop('');
        this.disabled = m.prop(false);

        this.type = m.prop('text');
    }
}

export interface SelectOptions {
    key: string;
    value: string;
}
export class SelectFormInputState extends FormInputState {
    public options:_mithril.MithrilProperty<Array<SelectOptions>>;

    constructor() {
        super();
        this.options = m.prop([]);
    }
}
export var FormUtil = {

    CSS: {
        IS_DIRTY: 'is-dirty',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_INVALID: 'is-invalid',
        IS_UPGRADED: 'is-upgraded'
    },

    _stateClassList: (state:FormInputState, classList:string[]) => {
        if (state.focused()) {
            classList.push(FormUtil.CSS.IS_FOCUSED);
        }

        if (state.value()) {
            classList.push(FormUtil.CSS.IS_DIRTY);
        }

        if (state.error()) {
            classList.push(FormUtil.CSS.IS_INVALID);
        }
    },

    _textInputClassList: (state:FormInputState)  => {
        var classList = ['TextInput', 'TextInput--floating-label'];
        FormUtil._stateClassList(state, classList);

        if (state.type() === 'password') {
            classList.push('Input--Password');
        }

        return classList.join(' ');
    },
    input: (label:string, state:FormInputState) => {
        return m('div', {
            className: FormUtil._textInputClassList(state)
        }, [
            m('input.TextInput-Input', {
                onchange: m.withAttr('value', state.value),
                value: state.value(),
                onfocus: state.focused.bind(null, true),
                onblur: state.focused.bind(null, false),
                type: state.type()
            }),
            m('label.TextInput-Label', label),
            m('span.TextInput-Error', state.error())
        ]);
    },

    selectList: (label:string, state:SelectFormInputState) => {
        var classList = [];
        FormUtil._stateClassList(state, classList);

        return m('div', {
            className: classList.join(' ')
        }, [
            m('select.SelectInput-Input', {
                onchange: m.withAttr('value', state.value),
                value: state.value(),
                onfocus: state.focused.bind(null, true),
                onblur: state.focused.bind(null, false),
                type: state.type()
            }, state.options().map(function (option) {
                return m('option', {
                    value: option.value
                }, option.key);
            })),
            m('label.SelectInput-Label', label),
            m('span.SelectInput-Error', state.error())
        ])
    }
}
