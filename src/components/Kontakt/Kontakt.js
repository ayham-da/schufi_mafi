import React from 'react';
import { Helmet } from "react-helmet";
import { Typography } from '@material-ui/core';
import {Card, Image, Row} from "react-bootstrap";
import ContactStyles from "./KontaktStyle";
import { CardContent, CardActionArea } from '@material-ui/core';
import firstImg from '../../assets/img/schufimafi.png';
import { FaRoute } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import RoomIcon from '@material-ui/icons/Room';
import Email from '@material-ui/icons/Email';

import Animate from "react-smooth";
import SocialIcons from "../social_icons";


const Contact = () => {
    const classes = ContactStyles();
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SCHU FI MA FI</title>
                <link rel="canonical" href="#" />
                <meta name="description" content="SCHU FI MA FI" />
            </Helmet>
            <Animate to="1" from="0" attributeName="opacity">
                    <Row className={classes.rowStyle}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Image src={firstImg} className="home-main-img" alt="Image of SCHU FI MA FI"/>

                                <Typography
                                    className={classes.headMap}>
                                    <RoomIcon />
                                    &nbsp;
                                    Hier finden Sie uns!
                                </Typography>
                                <Card.Body
                                    className="text-center gmap-container d-flex flex-column align-items-stretch align-content-stretch"
                                >
                                    <div className="socialIcons-footer" >
                                        <SocialIcons />
                                    </div>
                                </Card.Body>
                                <CardActionArea>
                                    <Typography
                                        color="dark"
                                        className={classes.typo}
                                    >
                                        <FaHome /> &nbsp;SCHU FI MA FI Kollektiv
                                    </Typography>
                                    <Typography
                                        color="dark"
                                        className={classes.typo}
                                    >
                                        <FaRoute /> &nbsp; Fichtenstraße 40
                                    </Typography>
                                    <Typography
                                        color="dark"
                                        className={classes.typo}>
                                        <FaCity /> &nbsp;  40233 Düsseldorf
                                    </Typography>
                                    <Typography
                                        color="dark"
                                        className={classes.typo}
                                    >
                                        <Email /> &nbsp;
                                        <a href="mailto:contact@schufimafi-collective.com"
                                           className={classes.email}>
                                            contact@schufimafi-collective.com
                                        </a>
                                    </Typography>
                                    <Typography
                                        color="dark"
                                        className={classes.typo}>
                                        Haben Sie noch Fragen? Schreiben Sie Uns!
                                    </Typography>
                                </CardActionArea>
                            </CardContent>
                        </Card>
                    </Row>

            </Animate>

        </div>
    );
}

export default Contact;
