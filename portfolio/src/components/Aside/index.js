import React from 'react';

export default function Aside() {
    return (
        <aside id="about">
            <h3>About me</h3>
            <img src="./assets/images/Craig.jpg" alt="Craig" />
                <p>I enjoy exploring new programming concepts, languages, and technologies and have been for the past 10 years.
                    Listed on this page are a few of the projects that I am most proud of.  Please reach out with any questions or requests.
                    <span class="page-links"><button onClick={() => window.location = 'mailto:cvonbartheld@email.com'}>Email me here</button>
                        {/* <a href=mailto: craigvonbartheld@email.com>Email Me Here</a> */}
                        </span>
            </p>
        </aside>
    );
}