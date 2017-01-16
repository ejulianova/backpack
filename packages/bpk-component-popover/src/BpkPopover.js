import React, { PropTypes } from 'react';
import BpkHeading from 'bpk-component-heading';
import { BpkButtonLink } from 'bpk-component-link';
import BpkCloseButton from 'bpk-component-close-button';

import './bpk-popover.scss';

const BpkPopover = (props) => {
  const {
    onClose,
    closeButtonText,
    children,
    className,
    padded,
    title,
    closeButtonIcon,
    ...rest
  } = props;

  const classNames = ['bpk-popover'];
  const bodyClassNames = ['bpk-popover__body'];

  // outer classNames
  if (className) { classNames.push(className); }

  // inner classNames
  if (padded) { bodyClassNames.push('bpk-popover__body--padded'); }

  return (
    <section
      tabIndex="-1"
      className={classNames.join(' ')}
      {...rest}
    >
      <span className="bpk-popover__arrow" role="presentation" />
      <div className="bpk-popover__inner">
        {title && <header className="bpk-popover__header">
          <BpkHeading id="aria-label-heading" level="h4" bottomMargin={false}>
            {title}
          </BpkHeading>
          &nbsp;
          {closeButtonIcon
            ? <BpkCloseButton className="bpk-popover__close-button" label={closeButtonText} onClick={onClose} />
            : <BpkButtonLink onClick={onClose}>{closeButtonText}</BpkButtonLink>
          }
        </header>}
        <div className={bodyClassNames.join(' ')}>{children}</div>
        {!title && <footer className="bpk-popover__footer">
          <BpkButtonLink onClick={onClose}>{closeButtonText}</BpkButtonLink>
        </footer>}
      </div>
    </section>
  );
};

BpkPopover.propTypes = {
  onClose: PropTypes.func.isRequired,
  closeButtonText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padded: PropTypes.bool,
  title: PropTypes.string,
  closeButtonIcon: PropTypes.bool,
};

BpkPopover.defaultProps = {
  className: null,
  padded: true,
  title: null,
  closeButtonIcon: true,
};

export default BpkPopover;