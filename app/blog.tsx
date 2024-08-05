// pages/blog.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

interface BlogPost {
    id: number;
    title: string;
    description: string;
}

const Blog: React.FC = () => {
    const blogPosts: BlogPost[] = [
        { id: 1, title: 'Card 1', description: 'Description for Card 1' },
        { id: 2, title: 'Card 2', description: 'Description for Card 2' },
        { id: 3, title: 'Card 3', description: 'Description for Card 3' },
    ];

    return (
        <Container>
            <Row className="mt-5">
                {blogPosts.map(post => (
                    <Col md={4} key={post.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.description}</Card.Text>
                                <Link href={`/blog/${post.id}`}>
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Blog;
