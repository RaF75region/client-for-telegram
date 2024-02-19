import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <Box
        sx={{
            width: '100%',
            // maxWidth: 500,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 2,
        }}
    >
        <Skeleton variant="rounded" width="100%" height={80} />
        <Skeleton variant="rounded" width="100%" height={80} />
        <Skeleton variant="rounded" width="100%" height={80} />
        <Skeleton variant="rounded" width="100%" height={80} />
        <Skeleton variant="rounded" width="100%" height={80} />
        <Skeleton variant="rounded" width="100%" height={80} />
        <Skeleton variant="rounded" width="100%" height={80} />

    </Box>
}