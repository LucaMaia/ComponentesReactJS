import styled from 'styled-components';

export const CheckoxStyle = styled.div`
    .br-checkbox {
        --checkbox-background: var(--color-secondary-01);
        --checkbox-font-weight: var(--font-weight-medium);
        --checkbox-size: 24px;
        --checkbox-icon-size: var(--icon-size-sm);
        --checkbox-bullet-position: calc(
            (var(--checkbox-size) - var(--checkbox-icon-size)) * 0.5
        );
        --checkbox-padding: var(--spacing-scale-base);
        display: block;
    }

    .br-checkbox + .br-checkbox {
        margin-top: var(--spacing-scale-base);
    }

    .br-checkbox input {
        opacity: 0;
        position: absolute;
    }

    .br-checkbox input + label {
        cursor: pointer;
        display: inline-block;
        min-height: var(--checkbox-size);
        padding-left: calc(var(--checkbox-padding) + var(--checkbox-size));
        position: relative;
    }

    .br-checkbox input + label::before {
        background: var(--checkbox-background);
        border: 1px solid var(--color-secondary-04);
        border-radius: 4px;
        content: "";
        height: var(--checkbox-size);
        left: 0;
        position: absolute;
        top: -1px;
        width: var(--checkbox-size);
    }

    .br-checkbox input + label:empty {
        min-height: 20px;
        min-width: var(--checkbox-size);
        padding: 0;
    }

    .br-checkbox input + label:empty::before {
        top: 0;
    }

    .br-checkbox label {
        color: var(--text-color);
        font-size: var(--font-size);
        font-weight: var(--checkbox-font-weight);
    }

    .br-checkbox.hidden-label label {
        padding-left: var(--checkbox-size);
        text-indent: -10000px;
        white-space: nowrap;
        width: 0;
    }

    .br-checkbox input:checked + label::after {
        border-color: var(--selected);
        border-style: solid;
        border-width: 0 3px 3px 0;
        content: "";
        content: "";
        height: var(--checkbox-icon-size);
        left: 8px;
        position: absolute;
        right: 0;
        top: 4px;
        transform: rotate(45deg);
        width: 8px;
    }

    .br-checkbox.is-valid input + label::before, .br-checkbox.valid input + label::before, .br-checkbox[valid] input + label::before {
        border-color: var(--color-success);
    }

    .br-checkbox.is-invalid input + label::before, .br-checkbox.invalid input + label::before, .br-checkbox[invalid] input + label::before {
        border-color: var(--color-danger);
    }

    .br-checkbox.is-small input + label, .br-checkbox.small input + label, .br-checkbox[small] input + label {
        line-height: var(--spacing-scale-2xh);
        min-height: var(--spacing-scale-2xh);
    }

    .br-checkbox.is-small input + label::before, .br-checkbox.small input + label::before, .br-checkbox[small] input + label::before {
        height: var(--spacing-scale-2xh);
        width: var(--spacing-scale-2xh);
    }

    .br-checkbox.is-small input:checked + label::after, .br-checkbox.small input:checked + label::after, .br-checkbox[small] input:checked + label::after {
        border-width: 4px;
        height: 10px;
        width: 10px;
    }

    .br-checkbox input:invalid + label::before {
        border-color: var(--color-danger);
    }

    .br-checkbox input:focus:checked + label::before,
    .br-checkbox input:focus + label::before, .br-checkbox input:focus-visible:checked + label::before,
    .br-checkbox input:focus-visible + label::before, .br-checkbox input.focus-visible:checked + label::before,
    .br-checkbox input.focus-visible + label::before {
        border-color: var(--focus-color);
        box-shadow: 0 0 0 var(--surface-width-md) var(--focus-color);
        outline: none;
    }

    .br-checkbox input:hover:not(:disabled) + label::before {
        background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
    }

    .br-checkbox input:disabled + label {
        cursor: not-allowed;
        opacity: var(--disabled);
    }

    .br-checkbox input:disabled + label * {
        pointer-events: none;
    }
`;