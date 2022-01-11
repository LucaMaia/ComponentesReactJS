import styled from 'styled-components';

export const UploadStyle = styled.div`
.br-upload {
  --onboarding-dragging-color: var(--color-danger);
  --upload-z-index: var(--z-index-layer-0);
  z-index: var(--upload-z-index);
  /*** Estados ***/
}
@media (max-width: 575px) {
  .br-upload .br-button.upload-button {
    height: auto;
    padding: var(--spacing-scale-base) var(--spacing-scale-2x);
    width: 100% !important;
  }
  .br-upload .upload-button span {
    font-size: var(--font-size-scale-down-01);
    white-space: break-spaces;
  }
  .br-upload .item {
    flex-wrap: nowrap;
  }
  .br-upload .upload-list .support {
    flex-shrink: 0;
    margin-right: var(--spacing-scale-base);
  }
}
.br-upload input {
  display: none;
}
.br-upload.dragging .upload-button {
  background-color: var(--color-support-01);
}
.br-upload.dragging .upload-button span,
.br-upload.dragging .upload-button svg {
  color: var(--interactive);
  pointer-events: none;
}
.br-upload .br-button.upload-button {
  max-width: 550px;
  width: 100%;
}
.br-upload .br-button.upload-button:active * {
  color: var(--color-primary-pastel-01);
}
.br-upload .upload-button {
  border: var(--surface-width-sm) dashed;
  border-color: var(--interactive);
  border-radius: var(--surface-rounder-sm);
  display: block;
  padding-left: var(--spacing-scale-2x);
  padding-right: var(--spacing-scale-2x);
  text-align: left;
  width: 100%;
}
.br-upload .upload-button svg {
  color: var(--interactive);
  font-size: var(--icon-size-lg);
  padding-left: var(--spacing-scale-2x);
}
.br-upload .upload-button span {
  color: var(--interactive);
  font-size: var(--font-size-scale-base);
  font-style: italic;
  font-weight: var(--font-weight-regular);
  padding-left: var(--spacing-scale-half);
}
.br-upload .upload-list {
  max-width: 550px;
  position: relative;
}
.br-upload .upload-list .content {
  align-self: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 70%;
}
.br-upload .upload-list .support {
  align-items: center;
  display: flex;
}
.br-upload .upload-list .cargas {
  box-sizing: border-box;
  color: var(--color-secondary-08);
  display: inline-block;
  left: 54%;
  position: relative;
  text-align: right;
  top: 4px;
}
.br-upload .br-tooltip {
  max-width: 93%;
}
.br-upload .br-item {
  --item-padding: var(--spacing-scale-half) var(--spacing-scale-base)
    var(--spacing-scale-half) var(--spacing-scale-2x);
  align-items: center;
  display: flex;
}
.br-upload .br-item:first-child {
  margin-top: calc(var(--spacing-scale-half) * 2);
}
.br-upload.success .upload-button, .br-upload[data-success] .upload-button {
  border-color: var(--color-success);
}
.br-upload.success .feedback.color-success, .br-upload[data-success] .feedback.color-success {
  align-items: center;
  background: var(--color-success);
  color: var(--color-secondary-01) !important;
  display: inline-flex;
  height: 35px;
  margin-bottom: var(--spacing-scale-base);
  padding: 5px;
}
.br-upload.danger .upload-button, .br-upload[data-danger] .upload-button {
  border-color: var(--color-danger);
}
.br-upload.danger .feedback.color-danger, .br-upload[data-danger] .feedback.color-danger {
  align-items: center;
  background: var(--color-danger);
  color: var(--color-secondary-01) !important;
  display: inline-flex;
  height: 35px;
  margin-bottom: var(--spacing-scale-base);
  padding: 5px;
}
.br-upload.warning .upload-button, .br-upload[data-warning] .upload-button {
  border-color: var(--color-warning);
}
.br-upload.warning .feedback.color-warning, .br-upload[data-warning] .feedback.color-warning {
  align-items: center;
  background: var(--color-warning);
  color: var(--color-secondary-01) !important;
  display: inline-flex;
  height: 35px;
  margin-bottom: var(--spacing-scale-base);
  padding: 5px;
}
.br-upload.warning .feedback.color-warning, .br-upload[data-warning] .feedback.color-warning {
  color: var(--color-secondary-08) !important;
}
.br-upload.info .upload-button, .br-upload[data-info] .upload-button {
  border-color: var(--color-info);
}
.br-upload.info .feedback.color-info, .br-upload[data-info] .feedback.color-info {
  align-items: center;
  background: var(--color-info);
  color: var(--color-secondary-01) !important;
  display: inline-flex;
  height: 35px;
  margin-bottom: var(--spacing-scale-base);
  padding: 5px;
}

` 