import React from "react";
import { Container, Box, Typography, Paper } from "@mui/material";

function App() {
    return (
        <Box
            sx={{
                backgroundColor: "#FDF6E3", // Light, pleasant background
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Main Content */}
            <Container maxWidth="md" sx={{ textAlign: "center", py: 4 }}>
                <Typography variant="h2" gutterBottom>
                    Slolingo
                </Typography>

                <Paper
                    sx={{
                        p: 4,
                        display: "inline-block",
                        textAlign: "center",
                        backgroundColor: "#FDF6E3",
                    }}
                >
                    {/* Lurch Image */}
                    <img
                        src="lurchi.svg"
                        alt="Lurch"
                        style={{
                            maxWidth: "300px",
                            margin: "2rem auto",
                            background: "transparent",
                        }}
                    />

                    {/* Demo Text */}
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Welcome to the Slolingo website — here to accompany our mobile app.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        This is just a short demo page, but stay tuned for more updates soon!
                    </Typography>

                    {/* Demo QR Code */}
                    <Box sx={{ mt: 4 }}>
                        <img
                            src="demo-qr.png"
                            alt="Demo QR Code"
                            style={{ maxWidth: "200px", background: "transparent" }}
                        />
                    </Box>
                </Paper>
            </Container>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    textAlign: "center",
                    p: 2,
                    mt: "auto",
                }}
            >
                <img
                    src="bka-logo-ger.svg"
                    alt="BKA Logo"
                    style={{ maxWidth: "150px", background: "transparent" }}
                />
            </Box>
        </Box>
    );
}

export default App;
