import React, { Component } from 'react'

export default class DefaultLayout extends Component {

    render() {
        return (
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="styles/site.css" />
                    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}
