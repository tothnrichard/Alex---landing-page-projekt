<?php
/**
 * Plugin Name: Alex Mobilier Landing Page
 * Description: Replaces the homepage with the interactive Alex Mobilier circular landing page. Adds a settings menu to easily update texts, images, and links.
 * Version: 1.0
 * Author: AI Studio
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Register Settings Menu
add_action('admin_menu', 'alex_landing_menu');
function alex_landing_menu() {
    add_menu_page(
        'Alex Landing Page Settings',
        'Alex Landing',
        'manage_options',
        'alex-landing-settings',
        'alex_landing_settings_page',
        'dashicons-layout',
        20
    );
}

// Register Settings
add_action('admin_init', 'alex_landing_register_settings');
function alex_landing_register_settings() {
    register_setting('alex_landing_options_group', 'alex_landing_options');
}

function alex_landing_settings_page() {
    $options = get_option('alex_landing_options');
    
    // Default values
    $defaults = array(
        'shaping' => 'Shaping',
        'spaces' => 'Spaces',
        'exploreBranches' => 'Explore our specialized branches dedicated to transforming education, hospitality, workplaces, and unique interior spaces.',
        'education_title' => 'Education',
        'education_full' => 'ALEX EDUCATION',
        'education_desc' => 'Empowering learning environments with ergonomic, adaptable, and inspiring furniture solutions tailored for modern educational spaces.',
        'education_img' => '',
        'education_link' => 'https://www.alexmobilier.ro/scolar',
        
        'hospitality_title' => 'Hospitality',
        'hospitality_full' => 'ALEX HOSPITALITY',
        'hospitality_desc' => 'Creating unforgettable guest experiences through bespoke, luxurious, and durable furniture designed for hotels and restaurants.',
        'hospitality_img' => '',
        'hospitality_link' => 'https://www.alexmobilier.ro/office',
        
        'workplace_title' => 'Workplace',
        'workplace_full' => 'ALEX WORKPLACE',
        'workplace_desc' => 'Elevating productivity and wellbeing with innovative office furnishings that transform corporate environments.',
        'workplace_img' => '',
        'workplace_link' => 'https://www.alexmobilier.ro/office',
        
        'spaces_title' => 'Spaces',
        'spaces_full' => 'ALEX SPACES',
        'spaces_desc' => 'Curating versatile and aesthetic furniture for residential, public, and specialized interior spaces.',
        'spaces_img' => '',
        'spaces_link' => 'https://www.alexmobilier.ro/office',
    );

    // Merge defaults
    $options = wp_parse_args($options ?: [], $defaults);

    ?>
    <div class="wrap">
        <h2>Setări Alex Landing Page</h2>
        <p>Aici poți configura textele și imaginile pentru pagina principală (cercul interactiv).<br>
        <strong>Mărimea recomandată a imaginilor:</strong> <span style="color:#d54e21;">1200 x 1200 pixeli (format pătrat)</span>. Pot fi salvate ca JPG, PNG sau WebP.</p>
        <form method="post" action="options.php">
            <?php settings_fields('alex_landing_options_group'); ?>
            
            <table class="form-table" style="background:#fff; padding:15px; margin-top:20px; border:1px solid #ccc; max-width:800px;">
                <tr><th colspan="2" style="padding-top:0;"><h3>1. Texte Globale (Titlu)</h3></th></tr>
                <tr>
                    <th scope="row">Titlu principal (Partea 1 - Neagră)</th>
                    <td><input type="text" name="alex_landing_options[shaping]" value="<?php echo esc_attr($options['shaping']); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th scope="row">Titlu principal (Partea 2 - Galbenă)</th>
                    <td><input type="text" name="alex_landing_options[spaces]" value="<?php echo esc_attr($options['spaces']); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th scope="row">Subtitlu (descriere scurtă)</th>
                    <td><textarea name="alex_landing_options[exploreBranches]" class="large-text" rows="3"><?php echo esc_textarea($options['exploreBranches']); ?></textarea></td>
                </tr>
            </table>

            <?php 
            $branches = [
                'education' => 'Education (Stânga Sus)', 
                'hospitality' => 'Hospitality (Dreapta Sus)', 
                'workplace' => 'Workplace (Stânga Jos)', 
                'spaces' => 'Spaces (Dreapta Jos)'
            ];
            foreach($branches as $key => $label): 
            ?>
            <table class="form-table" style="background:#fff; padding:15px; margin-top:20px; border:1px solid #ccc; max-width:800px;">
                <tr><th colspan="2" style="padding-top:0;"><h3>2. Ramura: <?php echo $label; ?></h3></th></tr>
                <tr>
                    <th scope="row">Nume Scurt (Afișat implicit pe cerc)</th>
                    <td><input type="text" name="alex_landing_options[<?php echo $key; ?>_title]" value="<?php echo esc_attr($options[$key.'_title']); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th scope="row">Nume Complet (Afișat la Hover)</th>
                    <td><input type="text" name="alex_landing_options[<?php echo $key; ?>_full]" value="<?php echo esc_attr($options[$key.'_full']); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th scope="row">Textul de Descriere</th>
                    <td><textarea name="alex_landing_options[<?php echo $key; ?>_desc]" class="large-text" rows="3"><?php echo esc_textarea($options[$key.'_desc']); ?></textarea></td>
                </tr>
                <tr>
                    <th scope="row">Link (Destinația butonului "Explore")</th>
                    <td><input type="url" name="alex_landing_options[<?php echo $key; ?>_link]" value="<?php echo esc_attr($options[$key.'_link']); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th scope="row">Imagine Background (URL)</th>
                    <td>
                        <input type="url" name="alex_landing_options[<?php echo $key; ?>_img]" value="<?php echo esc_attr($options[$key.'_img']); ?>" class="large-text" />
                        <p class="description">Încarcă imaginea (1200x1200px) în <i>Media Library</i> și copiază URL-ul aici. Dacă lași gol, se va folosi o culoare solidă de fundal.</p>
                    </td>
                </tr>
            </table>
            <?php endforeach; ?>

            <p class="submit">
                <?php submit_button('Salvează Modificările', 'primary', 'submit', false); ?>
            </p>
        </form>
        
        <div style="background:#e0f7fa; border-left: 4px solid #00acc1; padding: 15px; margin-top: 30px; max-width: 800px;">
            <h4>Cum folosești acest Landing Page?</h4>
            <p>1. Intră la secțiunea <b>Pages</b> și adaugă sau editează o pagină (de ex: "Acasă").</p>
            <p>2. În dreapta ecranului, la <b>Page Attributes > Template</b>, selectează șablonul <b>Alex Mobilier Landing Page (Plugin)</b>.</p>
            <p>3. Salvează și vizitează pagina. Ea va prelua tot ecranul, ascunzând meniul și footer-ul vechi, încărcând elementul circular 3D, dar menținând script-urile esențiale în spate (Analytics, Cookies).</p>
        </div>
    </div>
    <?php
}

// Add Custom Page Template
add_filter('theme_page_templates', 'alex_landing_add_template');
function alex_landing_add_template($templates) {
    $templates['alex-landing-template.php'] = 'Alex Mobilier Landing Page (Plugin)';
    return $templates;
}

add_filter('template_include', 'alex_landing_load_template');
function alex_landing_load_template($template) {
    if (get_page_template_slug() === 'alex-landing-template.php') {
        $plugin_template = plugin_dir_path(__FILE__) . 'templates/alex-landing-template.php';
        if (file_exists($plugin_template)) {
            return $plugin_template;
        }
    }
    return $template;
}

// Enqueue React App
add_action('wp_enqueue_scripts', 'alex_landing_enqueue_scripts', 100);
function alex_landing_enqueue_scripts() {
    if (get_page_template_slug() === 'alex-landing-template.php') {
        $plugin_url = plugin_dir_url(__FILE__);
        
        // Find compiled CSS and JS
        $css_files = glob(plugin_dir_path(__FILE__) . 'dist/assets/*.css');
        $js_files = glob(plugin_dir_path(__FILE__) . 'dist/assets/*.js');
        
        if (!empty($css_files)) {
            wp_enqueue_style('alex-landing-css', $plugin_url . 'dist/assets/' . basename($css_files[0]), array(), null);
        }
        
        if (!empty($js_files)) {
            // Need to set module type for Vite output
            wp_enqueue_script('alex-landing-js', $plugin_url . 'dist/assets/' . basename($js_files[0]), array(), null, true);
            
            // Allow script to be type="module"
            add_filter('script_loader_tag', function($tag, $handle, $src) {
                if ('alex-landing-js' === $handle) {
                    return '<script type="module" src="' . esc_url($src) . '" crossorigin></script>';
                }
                return $tag;
            }, 10, 3);
            
            // Pass data to React
            $options = get_option('alex_landing_options', []);
            $data = array(
                'nav' => ['About', 'Sectors', 'Projects', 'Contact'],
                'getInTouch' => 'Get in touch',
                'shaping' => !empty($options['shaping']) ? $options['shaping'] : 'Shaping',
                'spaces' => !empty($options['spaces']) ? $options['spaces'] : 'Spaces',
                'exploreBranches' => !empty($options['exploreBranches']) ? $options['exploreBranches'] : 'Explore our specialized branches dedicated to transforming education, hospitality, workplaces, and unique interior spaces.',
                'discoverMore' => 'Discover More',
                'explore' => 'Explore',
                'branches' => array(
                    array(
                        'id' => 'education',
                        'title' => !empty($options['education_title']) ? $options['education_title'] : 'Education',
                        'fullTitle' => !empty($options['education_full']) ? $options['education_full'] : 'ALEX EDUCATION',
                        'description' => !empty($options['education_desc']) ? $options['education_desc'] : 'Empowering learning environments...',
                        'image' => !empty($options['education_img']) ? $options['education_img'] : '',
                        'link' => !empty($options['education_link']) ? $options['education_link'] : 'https://www.alexmobilier.ro/scolar',
                        'theme' => 'dark',
                        'pos' => 'top-0 left-0'
                    ),
                    array(
                        'id' => 'hospitality',
                        'title' => !empty($options['hospitality_title']) ? $options['hospitality_title'] : 'Hospitality',
                        'fullTitle' => !empty($options['hospitality_full']) ? $options['hospitality_full'] : 'ALEX HOSPITALITY',
                        'description' => !empty($options['hospitality_desc']) ? $options['hospitality_desc'] : 'Creating unforgettable guest experiences...',
                        'image' => !empty($options['hospitality_img']) ? $options['hospitality_img'] : '',
                        'link' => !empty($options['hospitality_link']) ? $options['hospitality_link'] : 'https://www.alexmobilier.ro/office',
                        'theme' => 'yellow',
                        'pos' => 'top-0 right-0'
                    ),
                    array(
                        'id' => 'workplace',
                        'title' => !empty($options['workplace_title']) ? $options['workplace_title'] : 'Workplace',
                        'fullTitle' => !empty($options['workplace_full']) ? $options['workplace_full'] : 'ALEX WORKPLACE',
                        'description' => !empty($options['workplace_desc']) ? $options['workplace_desc'] : 'Elevating productivity and wellbeing...',
                        'image' => !empty($options['workplace_img']) ? $options['workplace_img'] : '',
                        'link' => !empty($options['workplace_link']) ? $options['workplace_link'] : 'https://www.alexmobilier.ro/office',
                        'theme' => 'yellow',
                        'pos' => 'bottom-0 left-0'
                    ),
                    array(
                        'id' => 'spaces',
                        'title' => !empty($options['spaces_title']) ? $options['spaces_title'] : 'Spaces',
                        'fullTitle' => !empty($options['spaces_full']) ? $options['spaces_full'] : 'ALEX SPACES',
                        'description' => !empty($options['spaces_desc']) ? $options['spaces_desc'] : 'Curating versatile and aesthetic furniture...',
                        'image' => !empty($options['spaces_img']) ? $options['spaces_img'] : '',
                        'link' => !empty($options['spaces_link']) ? $options['spaces_link'] : 'https://www.alexmobilier.ro/office',
                        'theme' => 'dark',
                        'pos' => 'bottom-0 right-0'
                    )
                )
            );
            
            // Output inline script
            wp_add_inline_script('alex-landing-js', 'window.AlexLandingData = ' . wp_json_encode($data) . ';', 'before');
        }
    }
}
