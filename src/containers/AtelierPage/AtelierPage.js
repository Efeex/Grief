import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
    LayoutSingleColumn,
    LayoutWrapperTopbar,
    LayoutWrapperMain,
    LayoutWrapperFooter,
    Footer,
} from '../../components';

import css from './AtelierPage.css';

const AtelierPage = () => {
    return (
        <StaticPage>
            <LayoutSingleColumn>
                <LayoutWrapperTopbar>
                    <TopbarContainer />
                </LayoutWrapperTopbar>

                <LayoutWrapperMain className={css.mainWrapper}>
                    <h1>Welcome the atelier</h1>

    
                </LayoutWrapperMain>

                <LayoutWrapperFooter>
                    <Footer />
                </LayoutWrapperFooter>
            </LayoutSingleColumn>
        </StaticPage>

    );
};

export default AtelierPage;