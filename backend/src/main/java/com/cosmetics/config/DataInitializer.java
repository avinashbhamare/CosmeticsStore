package com.cosmetics.config;

import com.cosmetics.entity.Category;
import com.cosmetics.entity.Product;
import com.cosmetics.repository.CategoryRepository;
import com.cosmetics.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        // Only run if there are no categories (fresh database)
        if (categoryRepository.count() == 0) {
            System.out.println("🔄 Initializing sample data...");
            initializeCategories();
            initializeProducts();
            System.out.println("✅ Sample data initialized successfully!");
        } else {
            System.out.println("✅ Data already exists in database");
        }
    }

    private void initializeCategories() {
        String[] categoryNames = { "Skincare", "Makeup", "Haircare" };
        for (String name : categoryNames) {
            Category category = new Category();
            category.setName(name);
            categoryRepository.save(category);
            System.out.println("  ➤ Created category: " + name);
        }
    }

    private void initializeProducts() {
        Map<String, Category> categoryMap = new HashMap<>();
        for (Category cat : categoryRepository.findAll()) {
            categoryMap.put(cat.getName(), cat);
        }

        Category skincare = categoryMap.get("Skincare");
        Category makeup = categoryMap.get("Makeup");
        Category haircare = categoryMap.get("Haircare");

        // Skincare (10 products – whole prices)
        createProduct("Hydrating Moisturizer", "GlowLab",
                "Deep hydration cream for all skin types",
                "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400", 30.00, 50, skincare);
        createProduct("Vitamin C Serum", "BrightSkin",
                "20% Vitamin C for radiant skin",
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400", 40.00, 30, skincare);
        createProduct("Retinol Night Cream", "YouthGlow",
                "Anti-aging retinol treatment",
                "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", 50.00, 25, skincare);
        createProduct("Gentle Face Cleanser", "PureClean",
                "Sulfate-free cleanser",
                "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400", 19.00, 60, skincare);
        createProduct("Pore Tightening Toner", "ClearSkin",
                "Alcohol-free toner with witch hazel",
                "/images/n10.png", 15.00, 45, skincare);
        createProduct("SPF 50 Sunscreen", "SunBlock",
                "Broad spectrum, water-resistant",
                "/images/n1.png", 25.00, 80, skincare);
        createProduct("Hyaluronic Acid Booster", "DewSkin",
                "Intense hydration",
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400", 35.00, 55, skincare);
        createProduct("AHA BHA Exfoliating Peel", "GlowLab",
                "Weekly resurfacing treatment",
                "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400", 45.00, 25, skincare);
        createProduct("Niacinamide Serum", "ClearSkin",
                "Reduces redness, controls oil",
                "/images/n2.png", 28.00, 60, skincare);
        createProduct("Caffeine Eye Cream", "YouthGlow",
                "Reduces dark circles",
                "/images/n8.png", 32.00, 35, skincare);

        // Makeup (10 products)
        createProduct("Matte Lipstick Set", "ColorPop",
                "12 vibrant shades",
                "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", 25.00, 40, makeup);
        createProduct("Full Coverage Foundation", "FlawlessBase",
                "SPF 30, 40 shades",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400", 35.00, 60, makeup);
        createProduct("Eyeshadow Palette", "GlamEyes",
                "20 shades",
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400", 45.00, 35, makeup);
        createProduct("Waterproof Mascara", "LashPro",
                "24-hour volume",
                "https://images.unsplash.com/photo-1631214524220-6b8f2eb7c737?w=400", 17.00, 75, makeup);
        createProduct("Luminous Highlighter", "Strobe",
                "Natural glow",
                "/images/n10.png", 22.00, 65, makeup);
        createProduct("Cream Blush Stick", "Flush",
                "Buildable colour",
                "/images/n5.png", 14.00, 55, makeup);
        createProduct("Matte Setting Spray", "LockIt",
                "All-day wear",
                "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", 18.00, 70, makeup);
        createProduct("Precision Eyeliner Pen", "LinePerfect",
                "Waterproof, smudge-proof",
                "/images/n7.png", 12.00, 80, makeup);
        createProduct("Lip Plumper Gloss", "PlumpShine",
                "Non-stinging, high-shine",
                "/images/n7.png", 16.00, 65, makeup);
        createProduct("Brow Pencil Duo", "ArchPerfect",
                "Defines and fills brows",
                "/images/n10.png", 13.00, 70, makeup);

        // Haircare (10 products)
        createProduct("Argan Oil Shampoo", "SilkHair",
                "Sulfate-free",
                "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400", 20.00, 70, haircare);
        createProduct("Deep Repair Mask", "StrongLocks",
                "Intensive treatment",
                "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400", 28.00, 45, haircare);
        createProduct("Heat Protection Spray", "ShieldStyle",
                "Protects up to 450°F",
                "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400", 15.00, 55, haircare);
        createProduct("Coconut Oil Conditioner", "PureHydrate",
                "Lightweight softness",
                "/images/n7.png", 18.00, 65, haircare);
        createProduct("Anti-Dandruff Shampoo", "CleanScalp",
                "Zinc pyrithione",
                "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400", 16.00, 55, haircare);
        createProduct("Hair Growth Serum", "RootBoost",
                "Stimulates follicles",
                "/images/n2.png", 30.00, 40, haircare);
        createProduct("Curl Defining Cream", "CurlLuxe",
                "Reduces frizz",
                "/images/n9.png", 22.00, 45, haircare);
        createProduct("Leave-In Conditioner", "SilkHair",
                "Detangles, moisturises",
                "/images/n8.png", 19.00, 80, haircare);
        createProduct("Scalp Scrub", "CleanScalp",
                "Exfoliates buildup",
                "/images/n1.png", 26.00, 35, haircare);
        createProduct("Hair Oil", "RootBoost",
                "Strengthens, adds shine",
                "/images/n2.png", 24.00, 50, haircare);

        System.out.println("  ➤ Created " + productRepository.count() + " products");
    }

    private void createProduct(String name, String brand, String description, String imageUrl,
                               Double price, Integer stock, Category category) {
        Product product = new Product();
        product.setName(name);
        product.setBrand(brand);
        product.setDescription(description);
        product.setImageUrl(imageUrl);
        product.setPrice(price);
        product.setStock(stock);
        product.setCategory(category);
        productRepository.save(product);
    }
}