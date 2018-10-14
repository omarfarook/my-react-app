import React, { Component } from 'react';
import { isBrowser } from "react-device-detect";
import { MetaTags } from 'react-meta-tags';

const commonUtilityService = (WrpperComponent) => {
    return class extends Component {

        isNullOrUndefined(input) {
            if(null === input || undefined === input) {
                return true;
            }
            return false;
        }

        isBrowser() {
            if(isBrowser) {
                return true
            } else {
                return false;
            }
        }

        titleAndMetaTags(title, desc) {
            return (
                <MetaTags>
                    <title>{title}</title>
                    <meta name="description" content={desc} />
                </MetaTags>
            )
        }
 
        render() {
            return <WrpperComponent
                        isNullOrUndefined={this.isNullOrUndefined}
                        isBrowser={this.isBrowser}
                        titleAndMetaTags={this.titleAndMetaTags}
                        {...this.props}
                    />
        }
    }
};

export default commonUtilityService;