import React from 'react';

import LeftIcon from 'react-icons/lib/fa/angle-left';
import RightIcon from 'react-icons/lib/fa/angle-right';
import RefreshIcon from 'react-icons/lib/md/refresh';

import Switch from 'common/components/Switch';
import Tooltip from 'common/components/Tooltip';

import HorizontalAlign from './HorizontalAlign';
import VerticalAlign from './VerticalAlign';
import AddressBar from '../AddressBar';
import ExternalIcon from './ExternalOpen';
import {
  Container,
  Icons,
  Icon,
  AddressBarContainer,
  SwitchContainer,
} from './elements';

const IconStyles = {
  fontSize: 18,
  padding: 4,
  marginRight: 4,
};

function Navigator({
  url,
  onChange,
  onConfirm,
  onBack,
  onForward,
  onRefresh,
  isProjectView,
  toggleProjectView,
  openNewWindow,
  zenMode,
  alignRight,
  alignBottom,
  alignDirection,
  isServer,
}) {
  return (
    <Container className="flying-container-handler">
      <Icons>
        <Icon aria-label="Go Back" disabled={!onBack} onClick={onBack}>
          <LeftIcon />
        </Icon>
        <Icon aria-label="Go Forward" disabled={!onForward} onClick={onForward}>
          <RightIcon />
        </Icon>
        <Icon aria-label="Refresh" onClick={onRefresh}>
          <RefreshIcon />
        </Icon>
      </Icons>
      <AddressBarContainer
        onMouseDown={e => {
          e.stopPropagation();
        }}
      >
        <AddressBar url={url} onChange={onChange} onConfirm={onConfirm} />
      </AddressBarContainer>
      {alignBottom && (
        <Icon
          style={IconStyles}
          selected={alignDirection === 'bottom'}
          onClick={alignBottom}
        >
          <Tooltip title="Dock to Bottom">
            <HorizontalAlign />
          </Tooltip>
        </Icon>
      )}
      {alignRight && (
        <Icon
          style={IconStyles}
          selected={alignDirection === 'right'}
          onClick={alignRight}
        >
          <Tooltip title="Dock to Right">
            <VerticalAlign />
          </Tooltip>
        </Icon>
      )}
      {openNewWindow && (
        <Icon
          style={{ ...IconStyles, marginRight: zenMode ? 8 : 16 }}
          onClick={openNewWindow}
        >
          <Tooltip title="Open In New Window">
            <ExternalIcon />
          </Tooltip>
        </Icon>
      )}
      {!zenMode &&
        !isServer &&
        toggleProjectView && (
          <SwitchContainer>
            <Tooltip
              title={isProjectView ? 'Project View' : 'Current Module View'}
              position="left"
            >
              <Switch right={isProjectView} onClick={toggleProjectView} />
            </Tooltip>
          </SwitchContainer>
        )}
    </Container>
  );
}

export default Navigator;
