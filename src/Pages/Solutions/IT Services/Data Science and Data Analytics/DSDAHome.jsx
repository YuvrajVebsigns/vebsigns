import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import DSDAHero from './DSDAHero'
import DSDAConsultingSection from './DSDAConsultingSection'
import DSDAConsultingOverview from './DSDAConsultingOverview'
import DSDAOurExpertise from './DSDAOurExpertise'
import DSDABenefitsSection from './DSDABenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const DSDAHome = () => {
    return (
        <div>
            <Header />
            <DSDAHero />
            <DSDAConsultingSection />
            <DSDAConsultingOverview />
            <DSDAOurExpertise />
            <DSDABenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default DSDAHome
