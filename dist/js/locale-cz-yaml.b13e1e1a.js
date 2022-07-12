(self["webpackChunkfluidd"]=self["webpackChunkfluidd"]||[]).push([[864],{54865:function(e){e.exports={app:{bedmesh:{label:{box_scale:"Měřítko boxu",flat_surface:"Zobrazit plochou rovinu",mesh_matrix:"Síťová matice",probed_matrix:"Změřená matice",profile_name:"Název profilu",remove_profile:"Odstranit %{name} profil",scale:"Barevná škála",wireframe:"Drátěný model"},msg:{hint:"Pokud uložíte pod jiným názvem než %{name},  můžete původní profil %{name} odstranit.",not_found:"Síť bodů nenalezena.",not_loaded:"Síť bodů nenačtena."},tooltip:{calibrate:"Zahájí novou kalibraci, uloží se jako profil 'default'",delete:"Smazat profil. Toto RESTARTUJE vaši tiskárnu!",load:"Načíst profil",save:"Vloží profil do printer.cfg. Vaše tiskárna se RESTARTUJE!"}},chart:{label:{current:"Teplota",item:"Název",off:"Vypnout graf",on:"Zapnout graf",power:"Zatížení",target:"Cílová"},tooltip:{help:"Pro přiblížení podržte Shift.<br />Pro přepnutí grafu klikněte na položku.<br/> Klikněte na výkon pro jeho zobrazení v grafu."}},console:{label:{auto_scroll:"Automatický posun",hide_temp_waits:"Skrýt čekání na teplotu"},placeholder:{command:"'tab' pro autodoplňování, 'help' pro příkazy 'šipky' pro historii"}},endpoint:{error:{cant_connect:"Něco se pokazilo a fluidd se nemůže připojit na cílovou adresu. Jste si jistí že je adresa správně zadaná?",cors_error:"Zablokováno CORS politikou",cors_note:'To znamená, že bude třeba upravit konfiguraci moonrakeru. Prosím pročtěte si dokumentaci ohledně multi printer nastavení  <a href="%{url}" target="_blank">zde</a>'},hint:{add_printer:"Např. http://fluiddpi.local"},msg:{trouble:'Nefunguje Vám něco? <a href="%{url}" target="_blank">Klikněte zde </a> pro více informací.'},tooltip:{endpoint_examples:"Vložte URL Vašeho API.<br />Příklad URL;<br /><blockquote>fluidd.local, https://192.168.1.150</blockquote>"}},endstop:{label:{open:"OTEVŘEN",triggered:"SEPNUT"},msg:{subtitle:"Použijte tlačítko pro obnovení stavu koncových spínačů."}},file_system:{filters:{label:{print_start_time:"Filtrovat vytisknuté",print_start_time_desc:"Nezobrazí soubory, které jste již tiskly."}},label:{dir_name:"Název adresáře",disk_usage:"Využití disku",diskinfo:"Informace o disku",downloaded:"Staženo",file_name:"Název souboru",transfer_rate:"Přenosová rychlost",uploaded:"Nahráno"},msg:{confirm:"Jste si jisti? Smažete tím všechny soubory a adresáře.",not_found:"Žádný soubor nenalezen",processing:"Zpracovávám"},overlay:{label:"<strong>Přetáhněte</strong> soubor sem"},title:{add_dir:"Přidat adresář",add_file:"Přidat soubor",download_file:"Přijímám soubor",rename_dir:"Přejmenovat adresář",rename_file:"Přejmenovat soubor",upload_file:"Nahrávám soubor | Nahrávám soubory"},tooltip:{low_on_space:"Málo místa na disku",root_disabled:"{root} kořenový adresář není dostupný. Prosím zkontrolujte logy."}},gcode:{btn:{load_current_file:"Načíst aktuální soubor"},label:{current_layer_height:"Současná výška vrstvy",follow_progress:"Sledovat průběh tisku",layer:"Vrstva",layers:"Vrstvy",parsed:"Analyzována(y)",show_extrusions:"Zobrazit extruzi",show_moves:"Zobrazit pohyby",show_next_layer:"Následující vrstva",show_previous_layer:"Předchozí vrstva",show_retractions:"Zobrazit retrakce"},msg:{confirm:'Soubor "%{filename}" má %{size}, může být dost náročný na prostředky Vašeho systému. Jste si jistí?'}},general:{btn:{add:"Přidat",add_dir:"Přidat adresář",add_file:"Přidat soubor",add_printer:"Přidat tiskárnu",adjust_layout:"Upravit rozložení dashboardu",all:"Vše",calibrate:"Kalibrovat",cancel:"Zrušit",clear_profile:"Vymazat profil",close:"Zavřít",config_reference:"Konfigurační reference",download:"Stáhnout",edit:"Upravit",exit_layout:"Uložit rozložení",extrude:"Extruze",heaters_off:"Vypnout vyhřívání",load_all:"Načíst vše",more_information:"Více informací",pause:"Pauza",preheat:"Předehřát",presets:"Předvolby",preview_gcode:"Zobrazit Gcode",quad_gantry_level:"QGL",reboot:"Reboot",refresh:"Obnovit",remove:"Odstranit",remove_all:"Odstranit vše",rename:"Přejmenovat",reprint:"Vytisknout znovu",reset_file:"Vyčistit soubor",reset_layout:"Resetovat rozložení",restart_firmware:"Restartovat firmware",restart_service:"Restartovat %{service}",restart_service_klipper:"Restartovat Klipper",restart_service_moonraker:"Restartovat Moonraker",resume:"Pokračovat",retract:"Retrakce",save:"Uložit",save_as:"Uložit jako",save_restart:"Uložit a restartovat",send:"Odeslat",set_color:"Nastavit barvu",shutdown:"Vypnout",socket_reconnect:"Připojit se znovu",socket_refresh:"Vynutit obnovení",upload:"Nahrát",upload_print:"Nahrát a tisknout",view:"Zobrazení"},error:{app_setup_link:'Požadavky pro nastavení Fluidd naleznete <a target="_blank" href="%{url}">zde.</a>',app_warnings_found:"%{appName} varování nalezena.",components_config:'Nastavení pluginu Moonraker naleznete <a target="_blank" href="%{url}">here.</a>',failed_components:"Pluginy Moonrakeru zhavarovaly, prosím zkontrolujte logy, aktualizujte konfiuraci a restartujte moonraker."},label:{accel_to_decel:"Accel to Decel",acceleration:"Akcelerace",actual_time:"Aktuální",add_camera:"Přidat kameru",add_preset:"Přidat přednastavení",add_user:"Přidat uživatele",api_key:"Klíč API",api_url:"API URL",category:"Kategorie",change_password:"Změnit heslo",clear_all:"Vyčistit vše",color:"Barva",confirm:"Potvrdit",current_password:"Současné heslo",disabled_while_printing:"Zakázáno během tisku",edit_camera:"Upravit kameru",edit_preset:"Upravit přednastavení",edit_user:"Upravit uživatele",extrude_length:"Délka extruze",extrude_speed:"Rychlost extruze",filament:"Filament",file:"Soubor",finish_time:"Konec",flow:"Průtok",free:"volné",high:"Vysoké",host:"Host",layer:"Vrstva",layout:"Rozložení",longest_job:"Nejdelší tisk",low:"Nízko",m117:"M117",name:"Jméno",new_password:"Nové heslo",no_notifications:"Žádné notifikace",off:"Vypnuto",password:"Heslo",power:"Výkon",printers:"Tiskárny",progress:"Průběh",requested_speed:"Rychlost",retract_length:"Délka retrakce",retract_speed:"Rychlost retrakce",save_as:"Uložit jako",services:"Služby",slicer:"Slicer",speed:"Rychlost",sqv:"Rychlost na pravoúhlém rohu",total:"Celkem",total_filament:"Celkem použito filamentu",total_filament_avg:"Průměr na tisk",total_jobs:"Celkem tisků",total_print_time:"Celkový tiskový čas",total_print_time_avg:"Průměr na tisk",total_time:"Celkový čas",total_time_avg:"Průměr na tisk",uncategorized:"Bez kategorie",unretract_extra_length:"Extra délka detrakce",unretract_speed:"Rychlost detrakce",used:"použito",variance:"Rozptyl",velocity:"Rychlost",visible:"Viditelné",z_offset:"Odchylka Z"},msg:{password_changed:"Heslo změněno",wrong_password:"Sakriš, něco se pokazilo. Zadáváte správné heslo?"},simple_form:{error:{arrayofnums:"Pouze čísla",exists:"Již existuje",invalid_url:"Neplatná URL",max:"Max %{max}",min:"Min %{min}",min_or_0:"Min %{min} nebo 0",password_username:"Nemůžu najít uživatele",required:"Vyžadováno"},msg:{confirm:"Jste si jistí?",confirm_reboot_host:"Jste si jistí? Toto restartuje váš system.",confirm_shutdown_host:"Jste si jistí? Toto vypne váš system."}},table:{header:{actions:"Akce",end_time:"Ukončeno",estimated_time:"Odhadovaný čas",filament:"Filament",filament_used:"Použito filamentu",filament_weight_total:"Váha filamentu",first_layer_bed_temp:"Teplota podložky první vrstvy",first_layer_extr_temp:"Teplota extruderu první vrstvy",first_layer_height:"Výška první vrstvy",height:"Výška",last_printed:"Naposledy tisknuto",layer_height:"Výška vrstvy",modified:"Upraveno",name:"Název",print_duration:"Doba tisku",size:"Velikost",slicer:"Slicer",slicer_version:"Verze sliceru",start_time:"Zahájeno",status:"Stav",total_duration:"Celková doba trvání"}},title:{add_printer:"Přidat tiskárnu",bedmesh:"Mesh podložky",bedmesh_controls:"Nastavení meshe podložky",camera:"Kamera | Kamery",config_files:"Konfigurační soubory",configure:"Konfigurace",console:"Konzole",endstops:"Koncové spínače",fans_outputs:"Větráky a výstupy",gcode_preview:"Zobrazení Gcode",history:"Historie",home:"Domů",jobs:"Soubory",limits:"Limity tiskárny",macros:"Makra",retract:"Retrakce firmware",runout_sensors:"Runout senzory",settings:"Nastavení",stats:"Statistiky tiskárny",system:"Systém",system_overview:"Informace o systému",temperature:"Teploty",tool:"Nástroj",tune:"Ladění"},tooltip:{estop:"Nouzové zastavení",reload_klipper:"Obnoví konfiguraci klipperu.",reload_restart_klipper:"Obnoví konfiguraci klipperu a restartuje MCU.",restart_klipper:"Restartuje systémovou službu klipper."}},history:{msg:{}},printer:{state:{busy:"Zaneprázdněn",complete:"Kompletní",idle:"Nečinný",loading:"Nahrávání",paused:"Pauza",printing:"Tiskne",ready:"Připraven",standby:"Pohotovostní"}},setting:{btn:{add_camera:"Přidat kameru",add_thermal_preset:"Přidat přednastavení",add_user:"Přidat uživatele",reset:"Resetovat",select_theme:"Vybrat motiv"},camera_type_options:{mjpegadaptive:"MJPEG Adaptive",mjpegstream:"MJPEG Stream",video:"IP Camera"},label:{all_off:"Vše vypnout",all_on:"Vše zapnout",camera_flip_x:"Překlopit horizontálně",camera_flip_y:"Překlopit vertikálně",camera_stream_type:"Typ streamu",camera_url:"URL kamery",confirm_on_estop:"Požadovat potvrzení při nouzovém zastavení",dark_mode:"Tmavý režim",default_extrude_length:"Výchozí délka extruze",default_extrude_speed:"Výchozí rychlost extruze",default_toolhead_move_length:"Výchozí délka pohybu nástroje",default_toolhead_xy_speed:"Výchozí XY rychlost nástroje",default_toolhead_z_speed:"Výchozí Z rychlost nástroje",draw_background:"Vykreslovat pozadí",enable:"Povolit",enable_notifications:"Zapnout notifikace",extrusion_line_width:"Šířka linky extruze",flip_horizontal:"Překlopit horizontálně",flip_vertical:"Překlopit vertikálně",fps_target:"Cílové FPS",gcode_coords:"Použít souřadnice GCode",invert_x_control:"Převrátit ovládání X",invert_y_control:"Převrátit ovládání Y",invert_z_control:"Převrátit ovládání Z",language:"Jazyk rozhraní",move_line_width:"Šírka linky pohybu",primary_color:"Primární barva",printer_name:"Název tiskárny",reset:"Resetovat nastavení",retraction_icon_size:"Velikost ikony retrakce",show_animations:"Zobrazovat animace",theme_preset:"Komunitní přednastavení",thermal_preset_gcode:"GCode",thermal_preset_name:"Název přednastavení",z_adjust_values:"Úpravy Z hodnot"},timer_options:{duration:"Pouze doba trvání",filament:"Odhady filamentu",file:"Odhady ze souboru",slicer:"Slicer"},title:{authentication:"Authentikace",camera:"Kamera | Kamery",gcode_preview:"Zobrazení Gcode",general:"Základní",macros:"Makra",theme:"Téma",thermal_presets:"Nastavení teplot",tool:"Nástroj"},tooltip:{gcode_coords:"Použij pozici z GCode místo pozice nástroje na dashboardu"}},socket:{msg:{connecting:"Připojuji se na moonraker...",no_connection:"Žádné připojení k moonrakeru. Zkontrolujte stav moonrakeru nebo jej obnovte."}},system_info:{label:{capacity:"Kapacita",cpu_desc:"Popis CPU",distribution_codename:"Kódový název",distribution_like:"Druh distribuce",distribution_name:"Distribuce",hardware_desc:"Popis hardware",hostname:"Hostname",klipper_load:"Zátěž klipperu",manufactured:"Vyrobeno",manufacturer:"Výrobce",mcu_awake:"{mcu} Čas probuzení",mcu_bandwidth:"{mcu} Šířka pásma",mcu_load:"{mcu} Zatížení",model:"Model CPU",moonraker_load:"Zátěž moonrakeru",processor_desc:"Processor",product_name:"Název produktu",serial_number:"Seriové číslo",system_load:"Zátěž systému",system_memory:"Paměť",system_utilization:"Využití systému",total_memory:"Paměti celkem"}},tool:{btn:{home_x:"X",home_y:"Y"},tooltip:{extruder_disabled:"Extruze zakázána pod min_extrude_temp (%{min}<small>°C</small>)",home_xy:"Výchozí pozice XY",home_z:"Výchozí pozice Z"}},version:{btn:{check_for_updates:"Zkontrolovat aktualizace",finish:"Hotovo",update:"Aktualizovat",view_versions:"Zobrazit verze"},label:{commit_history:"Historie commitů",commits_on:"Commity zapnout",committed:"Commitnuto",dirty:"DIRTY",invalid:"INVALID",os_packages:"Balíčky systému",package_list:"Seznam balíčků",up_to_date:"AKTUÁLNÍ",updates_available:"Dostupné aktualizace"},status:{finished:"Aktualizace hotova",updating:"Aktualizuji..."},title:"Aktualizace programů",tooltip:{commit_history:"Historie commitů",dirty:"naznačuje odpojený (git) head, není v (git) masteru nebo neplatný (git) origin",invalid:"naznačuje lokální změny v repositáři",packages:"Balíčky",release_notes:"Poznámky k vydání"}}}}}}]);
//# sourceMappingURL=locale-cz-yaml.b13e1e1a.js.map