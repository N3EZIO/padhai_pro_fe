import React from 'react'
import { useParams } from 'react-router'

import './profile.css'
import { Nav, Card, CardGroup, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { User } from '../Data/User'
import NavbarHome from '../../components/Navbar/Navbar'

const Profile = () => {
    const params = useParams();
    const user = User.filter(user => user._id === params.id)[0];
    return (
        <>
            <NavbarHome />
            {/* Personal Details */}
            <Card className='my-2 mx-2 shadow p-3 mb-5 bg-white rounded'>
                <Card.Header>User Personal Details</Card.Header>
                <Card.Body className='profile'>
                    <Card.Img className='profile-pic' variant="top" src={user.picture} />
                    <div className='profile-info'>
                        <Card.Text className='fs-2'>{user.name}</Card.Text>
                        <strong>Bio : </strong><Card.Text className='fs-5 lh-sm' style={{ color: '#808080' }}>{user.about}</Card.Text>
                        <strong>Email : </strong><Card.Text className='fs-5' style={{ color: '#808080' }}>{user.email}</Card.Text>
                        <strong>Phone : </strong><Card.Text className='fs-5' style={{ color: '#808080' }}>{user.phone}</Card.Text>
                    </div>
                </Card.Body>
            </Card>

            {/* User Progress */}
            <Card className='my-2 mx-2 shadow p-3 mb-5 bg-white rounded'>
                <Card.Header>User Progress</Card.Header>
                <div className='profile-progress'>
                    <Card.Text as='span' className='fs-5' >Questions Solved : </Card.Text>
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip>
                                <Card.Text as='h6'>Physics : {user.age / 2}</Card.Text>
                                <Card.Text as='h6'>Chemistry : {user.age / 2}</Card.Text>
                                <Card.Text as='h6'>Math : {user.age / 2}</Card.Text>
                            </Tooltip>
                        }
                    >
                        <Card.Text as='span' className='fs-4' style={{ color: '#808080' }}>{user.age}</Card.Text>
                    </OverlayTrigger>
                </div>
            </Card>
            
            {/* Starred */}
            <Card className='my-2 mx-2 shadow p-3 mb-5 bg-white rounded'>
                <Card.Header>Starred Questions</Card.Header>
                <Card.Body className='profile'>
                <CardGroup>
                    {/* Physics */}
                    <Card>
                        <Card.Header>Physics</Card.Header>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button>Next</Button>
                        </Card.Footer>
                    </Card>

                    {/* Chemistry */}
                    <Card>
                        <Card.Header>Chemistry</Card.Header>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button>Next</Button>
                        </Card.Footer>
                    </Card>

                    {/* Mathematics */}
                    <Card>
                        <Card.Header>Mathematics</Card.Header>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button>Next</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                </Card.Body>
            </Card>
        </>
    )
}

export default Profile