import { useState } from 'react';
import { motion } from 'framer-motion';
import IntroDoc from './IntroDoc';
import BentoDoc from './BentoDoc';

export default function HeroSectionContent() {
    const [isBentoExpanded, setIsBentoExpanded] = useState<boolean>(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className='w-full'
        >
            <div className='flex flex-col gap-3'>
                {!isBentoExpanded && <IntroDoc />} {/* Hide IntroDoc when BentoDoc expands */}
                <BentoDoc onExpand={setIsBentoExpanded} />
            </div>
        </motion.div>
    );
}
