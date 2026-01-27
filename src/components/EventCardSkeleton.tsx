import { motion } from 'framer-motion';

interface EventCardSkeletonProps {
    count?: number;
}

const EventCardSkeleton = ({ count = 3 }: EventCardSkeletonProps) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="tech-border bg-card/50"
                >
                    {/* Image skeleton */}
                    <div className="aspect-video bg-muted/20 skeleton" />

                    {/* Content skeleton */}
                    <div className="p-6 space-y-3">
                        {/* Badge skeleton */}
                        <div className="h-6 w-20 bg-muted/20 skeleton rounded" />

                        {/* Title skeleton */}
                        <div className="h-6 w-3/4 bg-muted/20 skeleton rounded" />

                        {/* Description skeleton - 2 lines */}
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-muted/20 skeleton rounded" />
                            <div className="h-4 w-5/6 bg-muted/20 skeleton rounded" />
                        </div>

                        {/* Button skeleton */}
                        <div className="h-10 w-full bg-muted/20 skeleton rounded mt-4" />
                    </div>
                </motion.div>
            ))}
        </>
    );
};

export default EventCardSkeleton;
