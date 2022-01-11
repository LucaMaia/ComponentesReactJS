import styled from 'styled-components';

export const NotificationStyle = styled.div`

.br-notification {
    --notification-background: var(--color-secondary-01);
    --notification-shadow: 0 3px 6px rgba(var(--rgb-secondary-09), 0.16);
    --notification-padding: var(--spacing-scale-2x) var(--spacing-scale-4x);
    --notification-width: 50vw;
    --notification-height: calc(100vh - 86px);
    --notification-tab: var(--font-size-scale-down-01);
    background: var(--notification-background);
    box-shadow: var(--notification-shadow);
    max-height: var(--notification-height);
    max-width: var(--notification-width);
    overflow: auto;
    z-index: 1;
  }
  @media (max-width: 576px) {
    .br-notification {
      --notification-width: 100vw;
    }
  }
  .br-notification .notification-header {
    border-bottom: 1px solid #ccc;
    padding: var(--notification-padding);
  }
  .br-notification .notification-header *:last-child {
    margin-bottom: 0;
  }
  .br-notification .notification-body .br-tab .tab-item {
    padding: 0;
  }
  .br-notification .notification-body .br-tab .tab-content {
    overflow-y: auto;
  }
  .br-notification .notification-body .br-tab .tab-content .br-item {
    --interactive-rgb: var(--rgb-secondary-08);
    --item-color: var(--text-color);
    padding: var(--notification-padding);
    position: relative;
    white-space: normal;
  }
  .br-notification .notification-body .br-tab .tab-content .br-item .status {
    left: var(--spacing-scale-base);
    position: absolute;
    top: var(--spacing-scale-3x);
  }
  .br-notification .notification-body .br-tab .tab-content .br-item span {
    display: block;
  } `  