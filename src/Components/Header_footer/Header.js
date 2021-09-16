import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import { CityLogo } from '../ui/icons';

class Header extends Component {
    render() {
        return (
            
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#98c5e9',
                    boxShadow: 'none',
                    padding:'2px 0',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <Toolbar style={{display:'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            <CityLogo
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>
                    </div>
                    {/* <div class="grid">
                        <div class="row">
                            <div class="col l-2 m-6 c-12">
                                <Link to="/sign_in">
                                    <Button color="inherit">Login</Button>
                                </Link>
                            </div>
                            <div class="col l-2 m-6 c-12">
                                <Link to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </Link>
                            </div>
                            <div class="col l-2 m-6 c-12">
                                <Link to="/the_team">
                                    <Button color="inherit">The team</Button>
                                </Link>
                            </div>
                            <div class="col l-2 m-6 c-12">
                                <Link to="/the_matches">
                                    <Button color="inherit">Matches</Button>
                                </Link>
                            </div>
                            <div class="col l-2 m-6 c-12">
                                <Link to="/builder">
                                    <Button color="inherit">Builder</Button>
                                </Link>
                            </div>
                            <div class="col l-2 m-6 c-12">
                                <Link to="/blog">
                                    <Button color="inherit">Blog</Button>
                                </Link>
                            </div>
                        </div>
                    </div> */}
                    <Link to="/sign_in">
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                    </Link>
                    <Link to="/the_team">
                        <Button color="inherit">The team</Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button color="inherit">Matches</Button>
                    </Link>
                    <Link to="/builder">
                        <Button color="inherit">Builder</Button>
                    </Link>
                    <Link to="/blog">
                        <Button color="inherit">Blog</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;