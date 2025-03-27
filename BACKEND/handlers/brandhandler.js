// const Brand=require("./../db/brand");

// async function getBrands() {
//     let brands=await Brand.find();
//     return brands.map(x=>x.toObject());
// }

// async function getBrand(id) {
//     let brands=await Brand.findById(id);
//     return brands.toObject();
// }

// async function addBrand(model) {
//     let brand=new Brand({
//         name:model.name
//     });
//     await brand.save();
//     return brand.toObject();
    
// }


// async function updateBrand(id, model) {
//    await Brand.findByIdAndUpdate(id, model);
    
// }

// async function deleteBrand(id) {
//     await Brand.findByIdAndDelete(id);
// }

// module.exports={getBrands, getBrand, addBrand, updateBrand, deleteBrand};



const Brand = require("./../db/brand");
const mongoose = require('mongoose');

// function isValidObjectId(id) {
//     // Check if id is a valid 24-character hex string
//     if (mongoose.Types.ObjectId.isValid(id)) {
//       const objectId = new mongoose.Types.ObjectId(id);
//       return String(objectId) === id;
//     }
//     return false;
//   }

async function getBrands() {
    try {
        let brands = await Brand.find();
        return brands.map(x => x.toObject());
    } catch (error) {
        console.error('Error fetching brands:', error);
        throw new Error('Unable to fetch brands');
    }
}

function isValidObjectId(id) {
    // Multiple validation checks
    if (!id) return false;
    
    // Check if id is a string
    if (typeof id !== 'string') return false;
    
    // Check length and hexadecimal characters
    if (id.length !== 24) return false;
    
    // Use mongoose's built-in validation
    return mongoose.Types.ObjectId.isValid(id) && 
           new mongoose.Types.ObjectId(id).toString() === id;
  }
  
  async function getBrand(id) {
    try {
      // Enhanced validation before database query
      if (!isValidObjectId(id)) {
        throw new Error('Invalid brand ID');
      }
  
      let brand = await Brand.findById(id);
      
      if (!brand) {
        throw new Error('Brand not found');
      }
      
      return brand.toObject();
    } catch (error) {
      console.error('Error fetching brand:', error);
      throw error;
    }
  }

async function addBrand(model) {
    try {
        // Validate input
        if (!model || !model.name) {
            throw new Error('Brand name is required');
        }

        let brand = new Brand({
            name: model.name
        });
        
        await brand.save();
        return brand.toObject();
    } catch (error) {
        console.error('Error adding brand:', error);
        throw error;
    }
}

async function updateBrand(id, model) {
    try {
        // Validate ObjectId and model
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid brand ID');
        }

        if (!model) {
            throw new Error('Update model is required');
        }

        const updatedBrand = await Brand.findByIdAndUpdate(
            id, 
            model, 
            { new: true, runValidators: true }
        );

        if (!updatedBrand) {
            throw new Error('Brand not found');
        }

        return updatedBrand.toObject();
    } catch (error) {
        console.error('Error updating brand:', error);
        throw error;
    }
}

async function deleteBrand(id) {
    try {
        // Validate ObjectId before deletion
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid brand ID');
        }

        const deletedBrand = await Brand.findByIdAndDelete(id);

        if (!deletedBrand) {
            throw new Error('Brand not found');
        }

        return deletedBrand.toObject();
    } catch (error) {
        console.error('Error deleting brand:', error);
        throw error;
    }
}

module.exports = { getBrands, getBrand, addBrand, updateBrand, deleteBrand };
