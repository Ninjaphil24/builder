// assets/builder/navbar.ts
import { createApp } from 'vue'
import { Quasar, Ripple, ClosePopup } from 'quasar'
import 'quasar/dist/quasar.css'
import './builder.css'
import 'vue-advanced-cropper/dist/style.css'


// load the icon font (option A: local package)
import '@quasar/extras/material-icons/material-icons.css'

import quasarLang from 'quasar/lang/en-US'
import iconSet from 'quasar/icon-set/material-icons'

// import all components used in BuilderParent.vue
import {
    QLayout, QHeader, QToolbar, QToolbarTitle, QBtn,
    QDrawer, QList, QItem, QItemSection, QItemLabel, QIcon, QSpace, QPageContainer,
    QCard, QCardSection, QSeparator,
    QTabs, QTab, QTabPanels, QTabPanel,
    QForm, QInput, QBanner, QScrollArea, QDialog, QCardActions,
} from 'quasar'

import BuilderParent from './components/BuilderParent.vue'
import pinia from './pinia'   // shared Pinia instance

const app = createApp(BuilderParent)

// register pinia first
app.use(pinia)

// register Quasar
app.use(Quasar, {
    lang: quasarLang,
    iconSet,
    components: {
        QLayout, QHeader, QToolbar, QToolbarTitle, QBtn,
        QDrawer, QList, QItem, QItemSection, QItemLabel, QIcon, QSpace, QPageContainer,
        QCard, QCardSection, QSeparator,
        QTabs, QTab, QTabPanels, QTabPanel,
        QForm, QInput, QBanner, QScrollArea, QDialog, QCardActions,
    },
    directives: {
        Ripple,
        ClosePopup
    }
})

// mount
app.mount('#builder')
