import styled from 'styled-components';


export const AvatarStyle = styled.div`
    .br-avatar {
        --avatar-background: var(--color-primary-pastel-02);
        --avatar-color: var(--color-primary-pastel-01);
        --avatar-size: var(--avatar-small);
        --avatar-font-weight: var(--font-weight-bold);
        --avatar-icon-size: var(--avatar-icon-small);
        --avatar-text-size: var(--avatar-text-small);
        --avatar-small: 40px;
        --avatar-medium: 100px;
        --avatar-large: 160px;
        --avatar-icon-small: var(--icon-size-2x);
        --avatar-icon-medium: var(--icon-size-5x);
        --avatar-icon-large: var(--icon-size-8x);
        --avatar-text-small: var(--font-size-scale-up-03);
        --avatar-text-medium: var(--font-size-scale-up-07);
        --avatar-text-large: var(--font-size-scale-up-11);
        display: inline-block;
        vertical-align: middle;
    }
    .br-avatar .image {
        background-color: var(--avatar-background);
        border-radius: 50%;
        color: var(--avatar-color);
        display: inline-block;
        font-size: var(--avatar-text-size);
        font-weight: var(--avatar-font-weight);
        overflow: hidden;
        text-align: center;
        height: var(--avatar-size);
        width: var(--avatar-size);
    }
    .br-avatar .image img {
        height: var(--avatar-size);
        width: var(--avatar-size);
        vertical-align: baseline;
    }
    .br-avatar .image .svg-inline--fa,
    .br-avatar .image .fa,
    .br-avatar .image .fab,
    .br-avatar .image .fad,
    .br-avatar .image .fal,
    .br-avatar .image .far,
    .br-avatar .image .fas {
        --icon-size: var(--avatar-icon-size);
        margin-top: 0.25em;
    }
    .br-avatar.is-small, .br-avatar.small, .br-avatar[small] {
        --avatar-size: var(--avatar-small);
        --avatar-icon-size: var(--avatar-icon-small);
        --avatar-text-size: var(--avatar-text-small);
    }
    .br-avatar.is-medium, .br-avatar.medium, .br-avatar[medium] {
        --avatar-size: var(--avatar-medium);
        --avatar-icon-size: var(--avatar-icon-medium);
        --avatar-text-size: var(--avatar-text-medium);
    }
    .br-avatar.is-large, .br-avatar.large, .br-avatar[large] {
        --avatar-size: var(--avatar-large);
        --avatar-icon-size: var(--avatar-icon-large);
        --avatar-text-size: var(--avatar-text-large);
    }
    .br-avatar-action {
        background: transparent;
        border: 0;
    }
    .br-avatar-action:not(:disabled):hover {
        background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
    }
    .br-avatar-action:not(:disabled):active {
        background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
    }
    .br-avatar-action:focus {
        outline: none;
    }
    .br-avatar-action.focus-visible, .br-avatar-action:focus-visible {
        outline-color: var(--focus-color);
        outline-offset: var(--focus-offset);
        outline-style: var(--focus-style);
        outline-width: var(--focus-width);
    }
    
    /*# sourceMappingURL=avatar.css.map*/
  `;