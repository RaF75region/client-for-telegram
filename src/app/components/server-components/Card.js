import Card from '@mui/joy/Card';
import Box from "@mui/joy/Box"
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

async function loadPosts() {    
    const res = await fetch(`http://localhost:5021/getCountUsers`,
    {
        cache: "force-cache",
    });    
    return res.json();
}

export default async function CardServer() {
    const data = await loadPosts();        

    function getActive(){
        return data.filter(opt=>opt?.countRespose >=10)
    }

    function getNumberOfSales(){  
        const res = data.filter(opt=>opt?.plan !== null).filter(opt=>opt?.plan?.typePlan !== 0);        
        return res;
    }
    
    function getFreeUsers(){
        return data.filter(opt=>opt?.plan !== null).filter(opt=>opt?.plan?.typePlan === 0);
    }

    function getOnMounthUsers(){
        return data.filter(opt=>opt?.plan !== null).filter(opt=>opt?.plan?.typePlan === 1);
    }

    function getOnYearUsers(){
        return data.filter(opt=>opt?.plan !== null).filter(opt=>opt?.plan?.typePlan === 2);
    }
    

    
    return (
        <>
        <Box
            sx={{
                width: '100%',
                // maxWidth: 500,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                gap: 2,
            }}
        >
            <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} color="neutral" orientation="horizontal" variant="outlined">
                <CardContent>
                    <Typography level="title-md">Count users:</Typography>
                    <Typography>{data.length}</Typography>
                </CardContent>
            </Card>
            <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} color="neutral" orientation="horizontal" variant="outlined">
                <CardContent>
                    <Typography level="title-md">Active users:</Typography>
                    <Typography>{getActive().length}</Typography>
                </CardContent>
            </Card>
            <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} color="neutral" orientation="horizontal" variant="outlined">
                <CardContent>
                    <Typography level="title-md">Number of sales:</Typography>
                    <Typography>{getNumberOfSales().length}</Typography>
                </CardContent>
            </Card>
            <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} color="neutral" orientation="horizontal" variant="outlined">
                <CardContent>
                    <Typography level="title-md">GPT-3.5:</Typography>
                    <Typography>{getFreeUsers().length}</Typography>
                </CardContent>
            </Card>
            <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} color="neutral" orientation="horizontal" variant="outlined">
                <CardContent>
                    <Typography level="title-md">GPT-4.0 mounth:</Typography>
                    <Typography>{getOnMounthUsers().length}</Typography>
                </CardContent>
            </Card>
            <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} color="neutral" orientation="horizontal" variant="outlined">
                <CardContent>
                    <Typography level="title-md">GPT-4.0 year:</Typography>
                    <Typography>{getOnYearUsers().length}</Typography>
                </CardContent>
            </Card>
           
        </Box>       
        </>
    );
};
