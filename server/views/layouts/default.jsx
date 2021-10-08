import React, { Component } from 'react'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librarie

export default class DefaultLayout extends Component {

    render() {
        return (
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="../styles/site.css" />
                    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.js"></script>
                <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
                <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-database.js"></script>
                <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js"></script>
                <script src="/javascript.js" type="module"></script>
                <div id="js-app"></div>
                    {this.props.children}
                   
                </body>
            </html>
        )
    }
}
