import Container  from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import Box  from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
export default function Home() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                >
                    <Grid item xs={12}>
                        <Card color="secondary">
                            <CardContent>
                                <Typography color="primary">
                                    {' '}
                                    sample text{' '}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography> sample text </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
            </Box>
        </Container>
    )
}
