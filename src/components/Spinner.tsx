import { motion } from 'framer-motion';

interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
};

const Spinner = ({ size = 'md', className = '' }: SpinnerProps) => {
    return (
        <div className={`relative ${sizeMap[size]} ${className}`} role="status" aria-label="Loading">
            <motion.div
                className="absolute inset-0 border-4 border-accent/20 rounded-full"
            />
            <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;
