import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import { useNavigate } from "react-router-dom";


function BlogCard(props) {

  const { id, title, author, tag, summary } = props;
  const arrayChar = summary.split(' ')
  const first100Char = arrayChar.slice(0, 100).join(' ')
  const navigate = useNavigate();
  const handleOpenBlog = () => {
    console.log("clicked");
    navigate(`/fullblog?id=${id}`);
  };
  return (
    <Card className='my-3' onClick={handleOpenBlog}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {first100Char}...
        </Card.Text>
        <Button variant="primary">View Full Post</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;