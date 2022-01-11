import styled from 'styled-components';

export const MenuStyle = styled.div`

.br-menu {
    --menu-zindex: var(--z-index-layer-3);
    --menu-zindex-push: var(--z-index-layer-0);
    --menu-scrim: var(--surface-overlay-scrim);
    --menu-background: var(--bg-color);
    --menu-background-submenu: var(--color-secondary-02);
    --menu-logo: 40px;
    --menu-title: var(--text-color);
    --menu-divider: var(--color-secondary-04);
    --menu-item-background: transparent;
    --menu-item-color: var(--interactive);
    --menu-item-padding: var(--menu-item-medium);
    --menu-item-small: var(--spacing-scale-base);
    --menu-item-medium: var(--spacing-scale-2x);
    --menu-item-large: var(--spacing-scale-3x);
    /* stylelint-disable no-descending-specificity */
    /* stylelint-enable no-descending-specificity */
  }
  .br-menu .menu-container {
    display: none;
  }
  .br-menu .menu-scrim {
    background: var(--menu-scrim);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  .br-menu .menu-panel {
    --focus-offset: calc(var(--spacing-scale-half) * -1);
    background: var(--menu-background);
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .br-menu.active .menu-container {
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: var(--menu-zindex);
  }
  .br-menu.active .menu-panel {
    position: relative;
    z-index: calc(var(--menu-zindex) + 1);
  }
  .br-menu.active .menu-scrim {
    position: absolute;
  }
  .br-menu .menu-header {
    align-items: center;
    border-bottom: 1px solid var(--menu-divider);
    display: flex;
    padding: var(--spacing-scale-base) var(--spacing-scale-base);
  }
  .br-menu .menu-header .menu-title {
    align-items: center;
    display: flex;
    flex: 1;
    font-size: var(--menu-title);
    margin-left: var(--spacing-scale-base);
  }
  .br-menu .menu-header .menu-title img {
    max-height: var(--menu-logo);
  }
  .br-menu .menu-header .menu-title img + * {
    margin-left: var(--spacing-scale-base);
  }
  .br-menu .menu-body {
    flex: 1;
    overflow-y: auto;
  }
  .br-menu .menu-body ul,
  .br-menu .menu-body li {
    margin: 0;
    padding: 0;
  }
  .br-menu .menu-body ul {
    list-style: none;
  }
  .br-menu .menu-body .menu-folder > ul > li:last-child > .menu-item {
    border-bottom: 1px solid var(--menu-divider);
  }
  .br-menu .menu-body .menu-folder > .menu-item + ul {
    background: var(--menu-background-submenu);
  }
  .br-menu .menu-body .menu-folder > .menu-item + ul .menu-item {
    padding-left: var(--spacing-scale-5x);
  }
  .br-menu .menu-body .drop-menu > .menu-item {
    border-bottom: 1px solid var(--menu-divider);
  }
  .br-menu .menu-body .drop-menu.active > .menu-item {
    border-bottom: 0;
  }
  .br-menu .menu-body .drop-menu > ul {
    background: var(--menu-background-submenu);
    display: none;
  }
  .br-menu .menu-body .drop-menu.active > .menu-item:not(:hover) {
    --menu-item-background: var(--menu-background);
  }
  .br-menu .menu-body .drop-menu.active > .menu-item .support .svg-inline--fa,
  .br-menu .menu-body .drop-menu.active > .menu-item .support .fa,
  .br-menu .menu-body .drop-menu.active > .menu-item .support .fab,
  .br-menu .menu-body .drop-menu.active > .menu-item .support .fad,
  .br-menu .menu-body .drop-menu.active > .menu-item .support .fal,
  .br-menu .menu-body .drop-menu.active > .menu-item .support .far,
  .br-menu .menu-body .drop-menu.active > .menu-item .support .fas {
    transform: rotate(180deg);
  }
  .br-menu .menu-body .drop-menu.active > ul {
    display: block;
  }
  .br-menu .menu-footer {
    border-top: 1px solid var(--menu-divider);
  }
  .br-menu .menu-footer .menu-logos {
    border-bottom: 1px solid var(--menu-divider);
    column-gap: var(--spacing-scale-2x);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: var(--spacing-scale-base) var(--spacing-scale-5x);
    row-gap: var(--spacing-scale-2x);
  }
  .br-menu .menu-footer .menu-links {
    --focus-offset: var(--spacing-scale-half);
    border-bottom: 1px solid var(--menu-divider);
    padding: var(--spacing-scale-2x) var(--spacing-scale-5x);
  }
  .br-menu .menu-footer .menu-links a {
    display: block;
  }
  .br-menu .menu-footer .menu-links a:not(:last-child) {
    margin-bottom: var(--spacing-scale-2x);
  }
  .br-menu .menu-footer .menu-links a:not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-menu .menu-footer .menu-links a:not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }
  .br-menu .menu-footer .menu-social {
    border-bottom: 1px solid var(--menu-divider);
    padding: var(--spacing-scale-base) var(--spacing-scale-5x);
  }
  .br-menu .menu-footer .menu-social .sharegroup {
    display: flex;
  }
  .br-menu .menu-footer .menu-info {
    padding: var(--spacing-scale-2x);
  }
  .br-menu .menu-item {
    background: var(--menu-item-background);
    display: flex;
    padding: var(--menu-item-padding) var(--spacing-scale-2x);
  }
  .br-menu .menu-item .icon {
    margin-right: var(--spacing-scale-2x);
  }
  .br-menu .menu-item .content {
    flex: 1;
  }
  .br-menu a.menu-item {
    color: var(--menu-item-color);
  }
  .br-menu .side-menu > ul {
    background: var(--menu-background-submenu);
    display: none;
  }
  .br-menu .side-menu.active > .menu-item {
    --interactive-rgb: var(--rgb-primary-darken-01);
    --menu-item-color: var(--active);
    --menu-item-background: var(--menu-background);
    flex-direction: row-reverse;
    font-weight: var(--font-weight-semi-bold);
  }
  .br-menu .side-menu.active > .menu-item .icon {
    margin-right: 0;
  }
  .br-menu .side-menu.active > .menu-item .support {
    margin-right: var(--spacing-scale-2x);
  }
  .br-menu .side-menu.active > .menu-item .support .svg-inline--fa,
  .br-menu .side-menu.active > .menu-item .support .fa,
  .br-menu .side-menu.active > .menu-item .support .fab,
  .br-menu .side-menu.active > .menu-item .support .fad,
  .br-menu .side-menu.active > .menu-item .support .fal,
  .br-menu .side-menu.active > .menu-item .support .far,
  .br-menu .side-menu.active > .menu-item .support .fas {
    transform: rotate(180deg);
  }
  .br-menu .side-menu.active > ul {
    display: block;
  }
  .br-menu .side-menu.active .menu-item {
    padding-left: var(--spacing-scale-2x) !important;
  }
  .br-menu.small .menu-item {
    --menu-item-padding: var(--menu-item-small);
  }
  .br-menu.medium .menu-item {
    --menu-item-padding: var(--menu-item-medium);
  }
  .br-menu.large .menu-item {
    --menu-item-padding: var(--menu-item-large);
  }
  .br-menu.push .menu-trigger,
  .br-menu.push .menu-scrim {
    display: none;
  }
  @media (min-width: 576px) {
    .br-menu.push {
      --menu-zindex: var(--menu-zindex-push);
    }
  }
  @media (min-width: 576px) {
    .br-menu.push .menu-header {
      display: none;
    }
    .br-menu.push .menu-panel {
      height: auto;
    }
    .br-menu.push .menu-scrim {
      display: none;
    }
    .br-menu.push.active .menu-container {
      position: static;
    }
  }
  .br-menu.contextual {
    overflow: auto;
  }
  .br-menu.contextual .menu-body .menu-folder > .menu-item + ul .menu-item {
    padding-left: var(--spacing-scale-2x);
  }
  .br-menu.contextual .menu-body .menu-folder > ul > li:last-child > .menu-item {
    border-bottom: none;
  }
  .br-menu.contextual .menu-trigger {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    z-index: calc(var(--menu-zindex) - 1);
  }
  .br-menu.contextual .menu-trigger .br-button {
    --button-radius: 0;
  }
  .br-menu.contextual .menu-container {
    display: none;
    flex-direction: column-reverse;
    position: static;
  }
  .br-menu.contextual .menu-panel {
    height: auto;
  }
  .br-menu.contextual.active {
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-end;
    left: 0;
    position: fixed;
    right: 0;
    z-index: var(--menu-zindex);
  }
  .br-menu.contextual.active .menu-trigger {
    position: relative;
    z-index: calc(var(--menu-zindex) + 1);
  }
  .br-menu.contextual.active .menu-trigger .svg-inline--fa,
  .br-menu.contextual.active .menu-trigger .fa,
  .br-menu.contextual.active .menu-trigger .fab,
  .br-menu.contextual.active .menu-trigger .fad,
  .br-menu.contextual.active .menu-trigger .fal,
  .br-menu.contextual.active .menu-trigger .far,
  .br-menu.contextual.active .menu-trigger .fas {
    transform: rotate(180deg);
  }
  .br-menu.contextual.active .menu-container {
    display: flex;
    overflow: auto;
  }
  @media (min-width: 992px) {
    .br-menu.contextual .menu-trigger {
      display: none;
    }
    .br-menu.contextual .menu-scrim {
      position: static;
    }
    .br-menu.contextual .menu-container {
      display: block;
    }
  }
  .br-menu .menu-item[hidden] {
    display: none;
  }
  .br-menu .menu-item:disabled {
    cursor: not-allowed;
    opacity: var(--disabled);
  }
  .br-menu .menu-item:disabled * {
    pointer-events: none;
  }
  .br-menu a.menu-item:not(:disabled).active {
    --interactive-rgb: var(--rgb-secondary-01);
    --menu-item-background: var(--active);
    --menu-item-color: var(--color-secondary-01);
  }
  .br-menu a.menu-item:not(:disabled).active:focus {
    outline-color: var(--color-support-10);
  }
  .br-menu a.menu-item:not(:disabled):not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-menu a.menu-item:not(:disabled):not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }`  