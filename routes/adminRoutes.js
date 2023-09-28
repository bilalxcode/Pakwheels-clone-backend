const express = require("express");

const router = express.Router();
router.use(express.json());
const adminController = require("../controllers/adminController");
router.post("/login", adminController.adminLogin);
router.get("/getEveryAd", adminController.getEveryAd);
router.post("/BanUser", adminController.BanUser);
router.post("/UnBanUser", adminController.UnBanUser);
router.post("/approveAd", adminController.ApproveAd);
router.post("/deleteAd", adminController.DeleteAd);
router.post("/DisApproveAd", adminController.DisApproveAd);
router.post("/addProduct", adminController.addProduct);
router.get("/getCategory", adminController.getCategory);
router.post("/AddNewCategory", adminController.AddNewCategory);
router.get("/getProducts", adminController.getProducts);
router.post("/editProduct", adminController.editProduct);
router.post("/deleteProduct", adminController.deleteProduct);
router.post("/adVideo", adminController.AddVideo);
router.get("/getVideo", adminController.getVideo);



module.exports = router;
