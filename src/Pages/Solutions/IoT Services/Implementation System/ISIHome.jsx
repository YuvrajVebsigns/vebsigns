import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import ISIHero from './ISIHero'
import ISIConsultingSection from './ISIConsultingSection'
import ISIConsultingOverview from './ISIConsultingOverview'
import ISIOurExpertise from './ISIOurExpertise'
import ISIBenefitsSection from './ISIBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const ISIHome = () => {
    return (
        <div>
            <Header />
            <ISIHero />
            <ISIConsultingSection />
            <ISIConsultingOverview />
            <ISIOurExpertise />
            <ISIBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default ISIHome
