import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import UIUXHero from './UIUXHero'
import UIUXConsultingSection from './UIUXConsultingSection'
import UIUXConsultingOverview from './UIUXConsultingOverview'
import UIUXOurExpertise from './UIUXOurExpertise'
import UIUXBenefitsSection from './UIUXBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import AnalyticsSlider from '../../../AboutPage/AnalyticsPlatform'

const UIUXHome = () => {
    return (
        <div>
            <Header />
            <UIUXHero />
            <UIUXConsultingSection />
            <UIUXConsultingOverview />
            <UIUXOurExpertise />
            <AnalyticsSlider/>
            <UIUXBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default UIUXHome
