import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const THREE_SECONDS = 3000;

export const Footer = ({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  const showSavedFeedbackForSomeTime = useCallback(() => {
    setShowSavedFeedback(true);
    setTimeout(function () {
      setShowSavedFeedback(false);
    }, THREE_SECONDS);
  }, []);

  const onSaveButtonClick = useCallback(() => {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
      showSavedFeedbackForSomeTime();
      onSave();
    }, THREE_SECONDS);
  }, [onSave, showSavedFeedbackForSomeTime]);

  return (
    <div className="page-content__buttons">
      <button
        className="button button__secondary"
        disabled={isLoading}
        onClick={onCancel}>
        Cancel
      </button>
      <button
        className="button button__primary"
        disabled={isLoading}
        onClick={onSaveButtonClick}>
        {isLoading ? 'Saving...' : 'Save'}
      </button>
      {showSavedFeedback && (
        <div style={{ color: 'green', marginLeft: '8px' }}>
          <FontAwesomeIcon icon={faCheck} />
          <span>Saved!</span>
        </div>
      )}
    </div>
  );
};
