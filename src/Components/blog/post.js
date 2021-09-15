import React, { Component } from 'react';

class post extends Component {
    render() {
        return (
            <div>
                    <main>
                    <article className="flex-columns">
                        <div className="row">
                        <div className="column">
                            <div className="column-1">
                            <img itemProp="contentUrl" className="view_img" id="vimg" data-height={455} alt="Soccer, Manchester City F.C." 
                                src="https://vangiaurecca.github.io/ManCityBlog/public/images/fernandinho.jpg" height={455} 
                            />
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-2 bg-light">
                            <h2>How does Sheikh Mansour transform Man City?</h2>
                            <p className="meta">
                                <i className="fas fa-user" /> Posted by &nbsp;
                                <strong>Nguyễn Văn Giàu</strong> | Sep 19 2020
                            </p>
                            <p>
                            In 2008, Manchester City was purchased by Abu Dhabi United Group
                            for £210 million and received considerable financial investment
                            in both playing staff and club facilities, including the £150
                            million Etihad Campus in east Manchester.[5] Under the
                            management of Pep Guardiola they won the Premier League in 2018
                            becoming the only Premier League team to attain 100 points in a
                            single season. In 2019, they won four trophies, completing an
                            unprecedented sweep of all domestic trophies in England and
                            becoming the first English men's team to win the domestic
                            treble.[6] Manchester City's revenue was the fifth highest of a
                            football club in the world in the 2018–19 season at €568.4
                            million.[7] In 2019, Forbes estimated the club was the fifth
                            most valuable in the world at $2.69 billion,[8] The club is
                            owned by the City Football Group, a British-based[9] holding
                            company valued at £3.73 (US$4.8) billion in November 2019
                            following a 10% stake sale to Silver Lake
                            </p>
                            <a target="blank" href="https://vi.wikipedia.org/wiki/Manchester_City_F.C." className="btn btn-dark">
                                <i className="fas fa-chevron" />
                                Read more
                            </a>
                            </div>
                        </div>
                        </div>
                    </article>
                    <article className="flex-columns flex-reverse">
                        <div className="row">
                        <div className="column">
                            <div className="column-1">
                            <img itemProp="contentUrl" className="view_img" id="vimg" data-height={455} 
                            alt="Soccer, Kevin De Bruyne, Belgian, Manchester City F.C." src="https://vangiaurecca.github.io/ManCityBlog/public/images/kdb_blog.jpg" height={455} />
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-2 bg-dark">
                            <h2>Kevin De Bruyne</h2>
                            <p className="meta">
                                <i className="fas fa-user" /> Posted by &nbsp;
                                <strong>Nguyễn Văn Giàu</strong> | Oct 16 2021
                            </p>
                            <p className="info">
                            De Bruyne began his career at Genk, where he was a regular
                            player when they won the 2010–11 Belgian Pro League. In 2012, he
                            joined English club Chelsea, where he was used sparingly and
                            then loaned to Werder Bremen. He signed with Wolfsburg for £18
                            million in 2014, where he established himself as one of the best
                            players in the Bundesliga and was integral in DFB-Pokal win. In
                            the summer of 2015, De Bruyne joined Manchester City for a club
                            record £54 million. He has since won two Premier League titles,
                            four League Cups and an FA Cup with the club. In 2017–18, De
                            Bruyne tied the record for most assists in a Premier League
                            season and was awarded Player of the Season.
                            </p>
                            <a href="https://vi.wikipedia.org/wiki/Kevin_De_Bruyne" className="btn btn-light" target="blank">
                                <i className="fas fa-chevron" />
                                Read more
                            </a>
                            </div>
                        </div>
                        </div>
                    </article>
                    <article className="flex-columns">
                        <div className="row">
                        <div className="column">
                            <div className="column-1">
                            <img itemProp="contentUrl" className="view_img" id="vimg" data-height={455} 
                            alt="Jack Grealish" src="https://vangiaurecca.github.io/ManCityBlog/public/images/jackgrealish.jpg" height={455} />
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-2 bg-light">
                            <h2>Jack Grealish</h2>
                            <p className="meta">
                                <i className="fas fa-user" /> Posted by &nbsp;
                                <strong>Nguyễn Văn Giàu</strong> | Sep 19 2021
                            </p>
                            <p>
                            Jack Peter Grealish (born 10 September 1995) is an English professional footballer who plays as a winger 
                            or attacking midfielder for Premier League club Manchester City and the England national team.
                            Grealish joined Aston Villa at the age of six, and made his debut for the club in May 2014, 
                            following a loan at Notts County. Eligible to represent either England or the Republic of Ireland internationally, 
                            Grealish was capped by the Republic of Ireland up to under-21 level before confirming his decision to play for 
                            England in April 2016. He played for the England under-21s for the first time in May 2016, winning the 2016 Toulon Tournament. 
                            In 2021, Grealish signed for Manchester City in a transfer deal worth £100 million, making him the most expensive English player ever.
                            </p>
                            <a target="blank" href="https://vi.wikipedia.org/wiki/Jack_Grealish" className="btn btn-dark">
                                <i className="fas fa-chevron" />
                                Read more
                            </a>
                            </div>
                        </div>
                        </div>
                    </article>
                    </main>
            </div>
        );
    }
}

export default post;