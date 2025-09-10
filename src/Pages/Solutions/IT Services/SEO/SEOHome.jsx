import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import SEOHero from './SEOHero'
import SEOConsultingSection from './SEOConsultingSection'
import SEOConsultingOverview from './SEOConsultingOverview'
import SEOOurExpertise from './SEOOurExpertise'
import SEOBenefitsSection from './SEOBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const SEOHome = () => {
    return (
        <div>
            <Header />
            <SEOHero />
            <SEOConsultingSection />
            <SEOConsultingOverview />
            <SEOOurExpertise />
            <SEOBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default SEOHome
