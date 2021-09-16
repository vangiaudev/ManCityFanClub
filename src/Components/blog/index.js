import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
class index extends Component {
    render() {
        return (
    
          <div>
            <header className="hero">

            </header>
            <main>

              <section id="about">
                <div style={{justifyContent: 'space-around'}} className="flex-items">
                  <div>
                    <img className="games" src="https://vangiaurecca.github.io/ManCityBlog/public/images/premierleague.png" alt="" />
                    <div className="players">
                      <a href="https://www.google.com/search?rlz=1C1CHBF_enUS934US935&sxsrf=ALeKk00wc0idDWBNtULGw-xLa0G_yZBNQQ%3A1614269432580&ei=-Ms3YNb5IsTG-gT8_oOICQ&q=man+city+premier+league&oq=man+city+pre&gs_lcp=Cgdnd3Mtd2l6EAMYADILCAAQsQMQgwEQkQIyAggAMggIABCxAxCDATICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgjELADECc6BwgAELADEEM6BwgAEEcQsAM6BAgjECc6BAgAEEM6CggAELEDEIMBEENQ5F1Y5m1g5oMBaAFwAngAgAFfiAHNApIBATSYAQCgAQGqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&quot;">Premier league</a>
                    </div>
                  </div>
                  <div>
                    <img className="games" src="https://vangiaurecca.github.io/ManCityBlog/public/images/logocity.png" alt="" />
                    <div className="players">
                      <a href="https://www.mancity.com/players/mens">Danh sách cầu thủ</a>
                    </div>
                  </div>
                  <div className="players">
                    <img className="games" src="https://vangiaurecca.github.io/ManCityBlog/public/images/championsleague.png" alt="" />
                    <div>
                      <a href="https://www.google.com/search?rlz=1C1CHBF_enUS934US935&sxsrf=ALeKk01A8-ZZclKsAqxo-JtvDs-d6fJ9tg%3A1614270320552&ei=cM83YOWjIcH6-gTO65bICQ&q=man+city+champions+league&oq=man+city+champions+league&gs_lcp=Cgdnd3Mtd2l6EAwyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyBwgAELADEENQAFgAYKWFAWgBcAJ4AIABWogBWpIBATGYAQCqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwjlm5zIuYXvAhVBvZ4KHc61BZkQ4dUDCA0&quot;">Champions league</a>
                    </div>
                  </div>
                </div>
              </section>

              <section id="s2" className="solutions flex-columns">
                <div className="row">
                  <div className="column">
                    <div className="column-1">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/captain.jpg" alt="" />
                    </div>
                  </div>
                  <div className="column">
                    <div className="column-2">
                      <h2>Manchester City F.C.</h2>
                      <p className="info">
                        Manchester City Football Club is an English football club based
                        in Manchester that competes in the Premier League, the top
                        flight of English football. Founded in 1880 as St. Mark's (West
                        Gorton), it became Ardwick Association Football Club in 1887 and
                        Manchester City in 1894. The club's home ground is the City of
                        Manchester Stadium in east Manchester, to which it moved in
                        2003, having played at Maine Road since 1923. The club adopted
                        their sky blue home shirts in 1894 in the first season of the
                        club's current iteration, that have been used ever since.<br />
                      </p>
                      <a target="blank" href="https://vi.wikipedia.org/wiki/Manchester_City_F.C." className="btn btn-outline">
                        <i className="fas fa-chevron" />
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <Post></Post>
              <section id="s3" className="solutions flex-columns">
                <div className="row">
                  <div className="column">
                    <div className="column-2">
                      <h1>Manchester City's Manager</h1>
                      <h2>Pep Guardiola</h2>
                      <p className="info">
                      Guardiola was a defensive midfielder who usually played in a
                      deep-lying playmaker's role. He spent the majority of his career
                      with Barcelona, forming a part of Johan Cruyff's Dream Team that
                      won the club's first European Cup in 1992, and four successive
                      Spanish league titles from 1991 to 1994. He later captained the
                      team from 1997 until his departure from the club in 2001. After
                      leaving Barcelona, Guardiola had stints with Brescia and Roma in
                      Italy, Al-Ahli in Qatar, and Dorados de Sinaloa in Mexico. He
                      was capped 47 times for the Spanish national team and appeared
                      at the 1994 FIFA World Cup, as well as at UEFA Euro 2000. He
                      also played friendly matches for Catalonia.
                      </p>
                      <a target="blank" href="https://vi.wikipedia.org/wiki/Pep_Guardiola" className="btn btn-outline">
                        <i className="fas fa-chevron" />
                        Read more
                      </a>
                    </div>
                  </div>
                  <div className="column">
                    <div className="column-1">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/pepguardiola.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </section>
  
              <section id="cases" className="cases flex-grid section-padding">
                <header className="section-header">
                  <h2>Wallpaper</h2>
                </header>
                <div id="rio" className="row">
                  <div id="ate" className="column">
                    <a target="blank" href="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper01.jpg" data-lightbox="cases" data-title="Manchester City by Văn Giàu Recca">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper01.jpg" alt="" />
                    </a>
                    <a target="blank" href="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper02.jpg" data-lightbox="cases" data-title="Manchester City by Văn Giàu Recca">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper02.jpg" alt="" />
                    </a>
                  </div>
                  <div id="ate" className="column">
                    <a target="blank" href="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper03.png" data-lightbox="cases" data-title="Manchester City by Văn Giàu Recca">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper03.png" alt="" />
                    </a>
                    <a target="blank" href="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper04.jpg" data-lightbox="cases" data-title="Manchester City by Văn Giàu Recca">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper04.jpg" alt="" />
                    </a>
                  </div>
                  <div id="ate" className="column">
                    <a target="blank" href="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper05.PNG" data-lightbox="cases" data-title="Manchester City by Văn Giàu Recca">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper05.PNG" alt="" />
                    </a>
                    <a target="blank" href="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper06.jpg" data-lightbox="cases" data-title="Manchester City by Văn Giàu Recca">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper06.jpg" alt="" />
                    </a>
                  </div>
                  <div id="ate" className="column">
                    <a target="blank" href="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper07.jpg" data-lightbox="cases" data-title="Manchester City by Văn Giàu Recca">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper07.jpg" alt="" />
                    </a>
                    <a target="blank" href="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper08.PNG" data-lightbox="cases" data-title="Manchester City by Văn Giàu Recca">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/wallpaper08.PNG" alt="" />
                    </a>
                  </div>
                </div>
              </section>
              <section id="blog" className="blog flex-columns flex-reverse">
                <div className="row">
                  <div className="column">
                    <div className="column-1">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/riyadmahrez.jpg" alt="" />
                    </div>
                  </div>
                  <div className="column">
                    <div className="column-2 bg-dark">
                      <h2>Riyad Mahrez</h2>
                      <p className="meta">
                        <i className="fas fa-user" /> Posted by &nbsp;
                        <strong>Nguyễn Văn Giàu</strong> | Feb 22 2021
                      </p>
                      <p className="info">
                      Mahrez began his career as a youth player for French club AAS
                      Sarcelles. He turned professional in 2009 with Quimper, where he
                      played for only one season before moving to Le Havre, spending a
                      total of three years with them, initially playing for their
                      reserve team and then becoming a first-team regular. In January
                      2014, Mahrez signed for English side Leicester City, helping
                      them win the Championship and promotion to the Premier League at
                      the end of his first season. In the 2015–16 season he was the
                      Algerian Footballer of the Year, the PFA Players' Player of the
                      Year, and was a member of the Premier League PFA Team of the
                      Year as he helped Leicester City win the Premier League. He
                      signed for Manchester City in 2018, winning the Premier League,
                      FA Cup and EFL Cup in his first season.
                        <br />
                        <br />
                        <a target="blank" href="https://vi.wikipedia.org/wiki/Riyad_Mahrez" className="btn btn-outline">
                          <i className="fas fa-chevron" />
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="team" className="team section-padding">
                <header className="section-header" />
                <div className="flex-items">
                  <div>
                    <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/kevindebruyne.jpg" alt="" />
                  </div>
                  <div>
                    <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/kunaguero.png" alt="" />
                  </div>
                </div>
              </section>

              <section id="contact" className="contact flex-columns">
                <div className="row">
                  <div className="column">
                    <div className="column-1">
                      <img src="https://vangiaurecca.github.io/ManCityBlog/public/images/citys.PNG" alt="" />
                    </div>
                  </div>
                  <div id="color" className="column">
                    <div className="column-2">
                      <h2>Premier League games schedule</h2>
                      <h1>2021/2022</h1>
                      <p className="info">
                      The new Manchester City schedule for the 2020-21 season has been
                      released with dates for the new campaign confirmed and details
                      on how to watch Premier League in the USA on TV and via Peacock
                      online all below.
                      </p>
                      <a target="blank" href="https://www.foxsports.com/soccer/manchester-city-team-scores" className="btn btn-outline">
                        <i className="fas fa-chevron" />
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        );
      }
}

export default index;