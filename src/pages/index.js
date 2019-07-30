import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Avatar from "../components/Avatar"
import SEO from "../components/seo"
import Efforts from "../components/Efforts"
import RandomNumber from "../components/RandomNumber"
import ProjectGraphic from "../components/ProjectGraphic"
import DesEl from "../components/DesEl"
import GamEl from "../components/GamEl"

// Project gifs:
import portal from "../images/gifs/portal.gif"
import review from "../images/gifs/review.gif"
import portfolio from "../images/gifs/portfolio.gif"
import multi from "../images/gifs/multi.gif"

// Typing animation:
import Typist from 'react-typist'

// Font Awesome Import:
import "./index.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCode, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { faChartBar, faUserCircle, faComment, faEnvelope, faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, faCode, faLongArrowAltUp, faChartBar, faUserCircle, faComment, faEnvelope, faEyeSlash, faEye)

const IndexPage = () => (	
	<Layout>
        <SEO title="Home" />
        <section id="top-home">
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <h1>
                        <span className="d-block" id="dev">
                            <Typist cursor={{hideWhenDone: true}}>
								<Typist.Delay ms={500}/>Developer
							</Typist>
                        </span>
						<DesEl wait={1500}/>
                        <GamEl wait={2000}/>
                    </h1>
                    <p>Web apps by day,<br></br> leaderboards by night.</p>
                    <div className="d-flex justify-content-center d-md-block"><Link to="/#top-projects"><button className="btn btn-primary blue">View Projects</button></Link></div>
					<div className="d-flex justify-content-center d-md-block"><Link to="/#about-me"><span className="sidebar-link">Learn More</span></Link></div>
                </div>
                <div className="d-none d-md-block pl-md-5 col-md-7 col-sm-12">
                    <Avatar />
                </div>
            </div>
        </section>
        <section id="about-me">
            <div className="row">
                <div className="col-md-5">
                    <h1>About me</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <h2>Work Hard</h2>
                </div>
                <div className="pl-md-5 col-md-7 col-sm-12 blue">
                    <p>
                        I’m currently a web developer for Marketing4Storage and
                        spend a lot of time learning through projects and
                        research. I’ve been working on serverless APIs,
                        Gatsby.js builds, Netlify deployments, CSS animations,
                        Python web crawlers, and more.
                    </p>
                </div>
            </div>
			<div className="row mt-4">
				<div className="col-md-5 col-sm-12">
					<h2>Play Hard</h2>
				</div>
				<div className="pl-md-5 col-md-7 col-sm-12 blue">
					<p>When not busy, I grind loot in Borderlands, adventure in Minecraft, and dance in Fortnite.</p>
				</div>
			</div>
        </section>
		<section id="top-projects">
			<div className="row">
				<div className="col-md-5">
					<h1>Projects</h1>
				</div>
			</div>
			<div className="row project">
				<div className="col-md-5 col-sm-12 d-flex flex-column">
					<div className="project-details">
						<h2>M4S Client Portal</h2>
						<p className="project-status">In development</p>
						<p className="project-description">Web app that enables customers to monitor their brand rankings, reviews, and analytics data.</p>
						<ul>
							<li>Designed layout on Figma</li>
							<li>Built front-end on Bootstrap 3 and Bootstrap 4</li>
							<li>Version control with Git and FTP</li>
							<li>Applied agile practices to push development team toward production</li>
						</ul>
					</div>
					<div className="project-links d-flex justify-content-center d-md-block mb-4 mb-md-auto">
						<button className="btn btn-primary">Code snippet</button>
						<span className="project-source strikethrough"><FontAwesomeIcon icon={['far', "eye-slash"]}/>Private Source</span>
					</div>
				</div>
				<div className="pl-md-5 col-md-7 col-sm-12 d-flex flex-column">
					<div className="project-graphic">
						<ProjectGraphic src={portal}/>
					</div>
					<div className="project-stack">
						<span className="d-block d-md-inline">Made with:</span>
						<img src="https://img.icons8.com/ios/48/000000/php.png" alt="PHP"/>
						<img src="https://img.icons8.com/ios/48/000000/css.png" alt="CSS"/>
						<img src="https://img.icons8.com/color/48/000000/javascript.png" alt="Javascript"/>
						<img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap"/>
						<img src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt="jQuery"/>
					</div>
				</div>
			</div>
			
			<div className="row project">
				<div className="col-md-5 col-sm-12 d-flex flex-column">
					<div className="project-details">
						<h2>Review Indexer</h2>
						<p className="project-status">In Production</p>
						<p className="project-description">Internet bot scheduled to index customer reviews for multiple businesses.</p>
						<ul>
							<li>Built on scrapy and selenium with proxy middleware</li>
							<li>Constructed MySQL relational database architecture on AWS to store reviews from over 100 businesses</li>
							<li>Deployed on cloud EC2 instance</li>
							<li>Notify new reviews and errors via Slack API</li>
						</ul>
					</div>
					<div className="project-links d-flex justify-content-center d-md-block mb-5 mb-md-auto">
						<button className="btn btn-primary">Code snippet</button>
						<span className="project-source strikethrough"><FontAwesomeIcon icon={['far', "eye-slash"]}/>Private Source</span>
					</div>
				</div>
				<div className="pl-md-5 col-md-7 col-sm-12 d-flex flex-column">
					<div className="project-graphic">
						<ProjectGraphic src={review}/>
					</div>
					<div className="project-stack">
						<span className="d-block d-md-inline">Made with:</span>
						<img src="https://img.icons8.com/color/48/000000/python.png" alt="Python"/>
						<img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="AWS"/>
						<img src="https://img.icons8.com/color/48/000000/slack.png" alt="Slack"/>
					</div>
				</div>
			</div>

			<div className="row project">
				<div className="col-md-5 col-sm-12 d-flex flex-column">
					<div className="project-details">
						<h2>My Portfolio</h2>
						<p className="project-status">In production</p>
						<p className="project-description">Simple &amp; responsive layout for all things related to my work and craft.</p>
						<ul>
							<li>Built on Bootstrap 4 and Gatsby.js for reactjs component rendering</li>
							<li>Designed on Figma</li>
							<li>Statically hosted on Netlify for continuous deployment from Github</li>
							<li>Serverless API call to FaunaDB for stackoverflow visits and hits of code</li>
							<li>I only pay for the domain name.</li>
						</ul>
					</div>
					<div className="project-links d-flex justify-content-center d-md-block mb-5 mb-md-auto">
						<span className="project-source"><FontAwesomeIcon icon={['far', "eye"]}/>Github repo</span>
					</div>
				</div>
				<div className="pl-md-5 col-md-7 col-sm-12 d-flex flex-column">
					<div className="project-graphic">
						<ProjectGraphic src={portfolio}/>
					</div>
					<div className="project-stack">
						<span className="d-block d-md-inline">Made with:</span>
						<img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap"/>
						<img src="https://img.icons8.com/color/48/000000/javascript.png" alt="Javascript"/>
						<img className="invert" src="https://img.icons8.com/ios-filled/48/000000/react-native.png" alt="React + GatsbyJs"/>
						<img src="https://img.icons8.com/color/48/000000/console.png" alt="Bash Terminal"/>
					</div>
				</div>
			</div>

			<div className="row project">
				<div className="col-md-5 col-sm-12 d-flex">
					<div className="project-details">
						<p className="project-description d-flex justify-content-center d-md-block">And that's only the beginning...</p>
						<button className="btn btn-primary">view my github</button>
					</div>
				</div>
				<div className="pl-md-5 col-md-7 d-none d-md-block">
					<div className="project-graphic">
						<ProjectGraphic src={multi} multi={true}/>
					</div>
				</div>
			</div>

		</section>
		<section id="experience">
			<div className="row">
				<div className="col-md-5 col-sm-12">
					<h1>Experience</h1>
				</div>
			</div>
			<div className="row job-titles">
				<div className="col-md-5 col-sm-12">
					<h2>By job title</h2>
				</div>
				<div className="pl-md-5 col-md-7 col-sm-12">
					<ul>
						<li>Web Developer</li>
						<li>SEO Strategist</li>
						<li>Office Assistant</li>
					</ul>
				</div>
			</div>
			<div className="row efforts">
				<div className="col-md-5 col-sm-12">
					<h2>By effort</h2>
				</div>
				<div className="pl-md-5 col-md-7 col-sm-12">
					<Efforts />
				</div>
			</div>
			<div className="row milestones">
				<div className="col-md-5 col-sm-12">
					<h2>By milestone</h2>
				</div>
				<div className="pl-md-5 col-md-7 col-sm-12">
					<ul>
						<li><span className="effortCount">2002</span> - Wrote first HTML page on neopets</li>
						<li><span className="effortCount">2006</span> - Made blogs on freewebs, xanga, myspace</li>
						<li><span className="effortCount">2013</span> - Built mgakapatid.org on ZURB foundation</li>
						<li><span className="effortCount">2018</span> - Received “developer” as job title</li>
						<li><span className="effortCount">2019</span> - Built this website</li>
						<li><span className="effortCount"><RandomNumber initial={2019} min={2020} max={2111}/></span> - ???</li>
					</ul>
				</div>
			</div>
		</section>
		<section id="contact">
			<div className="row">
				<div className="col-md-5 col-sm-12">
					<h1>Contact</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-5 col-sm-12">
					<h2>Send me a message!</h2>
				</div>
				<div className="pl-md-5 col-md-7 col-sm-12">
					<p>Have any questions? Want to view my resume? Feel free to send me an email!</p>
					<form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">	
						<div className="form-group">
							<label htmlFor="contact-name">Name</label>
							<input name="name" required className="form-control" placeholder="Enter name" id="contact-name" type="name"/>
						</div>
						<div className="form-group">
							<label htmlFor="contact-email">Email</label>
							<input name="email" required className="form-control" placeholder="Enter email address" id="contact-email" type="email"/>
						</div>
						<div className="form-group">
							<label htmlFor="contact-topic">Topic</label>
							<select name="topic[]" defaultValue="default" required className="form-control">
								<option value="default" disabled>Select Topic</option>
								<option value="resume">Request Resume</option>
								<option value="inquiry">Business Inquiry</option>
								<option value="message">Other</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="contact-message">Message</label>
							<textarea name="message" rows="4" className="form-control" placeholder="Enter message" id="contact-message" type="text"/>
						</div>
						<div data-netlify-recaptcha="true"></div>
						<button type="submit" className="btn btn-primary">Send</button>
					</form>
				</div>
			</div>
			<div className="row social-icons">
				<div className="col-md-5 col-sm-12">
					<div className="d-flex justify-content-center d-md-block"><h2>Connect with me!</h2></div>
				</div>
				<div className="pl-md-5 col-md-7 col-sm-12">
					<div className="d-flex justify-content-center d-md-block">
						<a href="https://twitter.com/matthewagalang" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', "twitter"]}/></a>
						<a href="https://www.instagram.com/galangsterr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', "instagram"]}/></a>
						<a href="https://github.com/matthewgalang" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', "github"]}/></a>
						<a href="https://www.linkedin.com/in/matthew-galang/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', "linkedin-in"]}/></a>
					</div>
				</div>
			</div>
		</section>
    </Layout>
)

export default IndexPage
