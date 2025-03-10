import { Modal, Box, Button, Typography } from "@mui/material";

export default function RedirectModal({ open, setOpen, link, imageLink }) {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal open={open} onClose={handleClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "50vw",
                        bgcolor: "black", // Set background color to black
                        border: "1px solid blue", // Set border color to blue
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        NOTE: This can save you lots of time!
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <p className={'mb-4'}>You can click on the button
                            <span className={'font-bold border-2 m-2 border-blue-500 p-3 rounded-2xl'}>Login as ...</span>
                            to login without doing anything!
                        </p>
                        <p>This is <span className={'font-bold'}>RECOMMENDED</span> because the email service for registration
                            is unstable for the free tier.
                        </p>
                        <img
                            src={imageLink}
                            alt="Instruction"
                            style={{ maxWidth: "100%", height: "auto", display: "block" }}
                            className={'border-2 border-blue-500 p-3 rounded-2xl mt-6'}
                        />

                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                        <Button onClick={handleClose} sx={{ mt: 2 }} variant="outlined">
                            <a href={link} target="_blank" rel="noopener noreferrer">Go to website</a>
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}