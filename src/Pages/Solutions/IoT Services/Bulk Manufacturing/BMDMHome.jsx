import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import BMDMHero from './BMDMHero'
import BMDMConsultingSection from './BMDMConsultingSection'
import BMDMConsultingOverview from './BMDMConsultingOverview'
import BMDMOurExpertise from './BMDMOurExpertise'
import BMDMBenefitsSection from './BMDMBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const BMDMHome = () => {
    return (
        <div>
            <Header />
            <BMDMHero />
            <BMDMConsultingSection />
            <BMDMConsultingOverview />
            <BMDMOurExpertise />
            <BMDMBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default BMDMHome
