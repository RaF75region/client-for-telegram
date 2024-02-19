import Card from '@mui/joy/Card';
import Box from "@mui/joy/Box"
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

async function loadPosts() {    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/getCountUsers`);    
    return res.json();
}

export default async function CardServer() {
    const data = await loadPosts();


    function getActive(){
        return data.filter(opt=>opt?.countRespose >=10)
    }

    function getNumberOfSales(){
        console.log(data.filter(opt=>opt?.plan?.typePlan !== 0))
        return data.filter(opt=>opt?.plan?.typePlan !== 0 && opt?.plan!=null)
    }
    
    

    
    return (
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
             {/* <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} color="neutral" orientation="horizontal" variant="outlined">
                <CardContent>
                    <Typography level="title-md">Count users:</Typography>
                    <Typography>In developer</Typography>
                </CardContent>
            </Card> */}
            {/* <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} color="neutral" orientation="horizontal" variant="outlined">
                <CardContent>
                    <Typography level="title-md">Count users:</Typography>
                    <Typography>{data.length}</Typography>
                </CardContent>
            </Card> */}
            {/* // <div key={user.idUser} className="post-listing">
                //     <h3 className="post-title">{user.idUser}</h3>
                // </div> */}
            {/* ))} */}
        </Box>
    );
};
