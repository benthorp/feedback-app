import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const minChars = 10;
  const [feedbackText, setFeedbackText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    setIsDisabled(e.target.value.length < minChars);
    setFeedbackText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedbackText.length < minChars) return;

    addFeedback({ rating: rating, text: feedbackText });

    setFeedbackText('');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Any feedback for us?</h2>
        <RatingSelect setRating={setRating} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            //value={feedbackText}
          ></input>
          <Button isDisabled={isDisabled}>Submit</Button>
        </div>
        <div className="input message">
          {isDisabled && 'Please enter at least 10 characters'}
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
