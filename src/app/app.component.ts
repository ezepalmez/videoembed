import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

interface Tramite {
  value: string;
  viewValue: string;
}

interface TramiteGroup {
  disabled?: boolean;
  name: string;
  tramite: Tramite[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'button-toggle-app';
  badgeCount: number;

  videos: any[] = [
    { videoURL: "ZOd5LI4-PcM", descripcion: 'primer video descripción ghjsdghjsd bgghjsdjsahdjkshda hgjshdjsa' },
    { videoURL: "d6xQTf8M51A", descripcion: 'segundo video descripción gshjdhjsadhjskhdsj hgshjdhsjakdhjskda' },
    { videoURL: "BIfvIdEJb0U", descripcion: 'tercero video descripción hjsdhjskhdjaksd jisdjlsjdaljds' },
    { videoURL: "ZOd5LI4-PcM", descripcion: 'primer video descripción hjskhdjaksd hjskda' },
    { videoURL: "d6xQTf8M51A", descripcion: 'segundo video descripción hsjkhdjkasd ' },
    { videoURL: "BIfvIdEJb0U", descripcion: 'tercero video descripción hshdjksahdiasjdi uiouiojuio jikjkljkljkjkl' }
  ];

  /*****************************selectedValue: String[] = ["First"]
  toggleOptions: Array<String> = ["First", "Second"];
  video1: any;
  video2: any;
  video3: any;
  embedList: Array<String> = ['zcAalMeaKso', 'RZ5fNK2oTf4', '3yM5uXp-T_0'];*******************/


  selectionChanged(item) {
    console.log("Selected value: " + item.value);

   /************** this.selectedValue.forEach(i => console.log(`Included Item: ${i}`));*******************/
  }
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    /********this.badgeCount = 10;
    this.video1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zcAalMeaKso');
    this.video2 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/RZ5fNK2oTf4');
    this.video3 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3yM5uXp-T_0');********************/
  }

  derecha() {
    var elmnt = document.getElementById("video-header");
    elmnt.scrollLeft += 50;
  }
  izquierda() {
    var elmnt = document.getElementById("video-header");
    elmnt.scrollLeft -= 50;
  }

  
  ///////////////////////////////////////////////
 /************************* tramiteControl = new FormControl();
  tramiteGroups: TramiteGroup[] = [
    {
      name: 'CAMBIO DE CALIDAD MIGRATORIA',
      tramite: [
        { value: 'ccm1', viewValue: 'Residente' },
        { value: 'ccm2', viewValue: 'Temporal' },
        { value: 'ccm3', viewValue: 'Designado Residente' },
        { value: 'ccm4', viewValue: 'Inversionista Residente' },
        { value: 'ccm5', viewValue: 'Religioso Residente' },
        { value: 'ccm6', viewValue: 'Temporal MERCOSUR' },
        { value: 'ccm7', viewValue: 'Permanente MERCOSUR' },
        { value: 'ccm8', viewValue: 'MERCOSUR' },
        { value: 'ccm9', viewValue: 'Designado Temporal' },
        { value: 'ccm10', viewValue: 'Especial Residente' },
        { value: 'ccm11', viewValue: 'formación residente' },
        { value: 'ccm12', viewValue: 'Formación Temporal' },
        { value: 'ccm13', viewValue: 'Investigación Residente' },
        { value: 'ccm14', viewValue: 'Investigación Temporal' },
        { value: 'ccm15', viewValue: 'Permanente' },
        { value: 'ccm16', viewValue: 'Familiar Residente' },
        { value: 'ccm17', viewValue: 'hijo o hija menor de edad' },
        { value: 'ccm18', viewValue: 'hijo o hija mayor de edad' },
        { value: 'ccm19', viewValue: 'conyuge' },
        { value: 'ccm20', viewValue: 'casado' },
        { value: 'ccm21', viewValue: 'unión de hecho' },
        { value: 'ccm22', viewValue: 'convivencia' },
        { value: 'ccm23', viewValue: 'Rentista Residente' },
        { value: 'ccm24', viewValue: 'Trabajador Residente' },
        { value: 'ccm25', viewValue: 'Trabajador Temporal' },
      ]
    },
    {
      name: 'PRÓRROGA DE RESIDENCIA',
      tramite: [
        { value: 'pdr1', viewValue: 'Residente' },
        { value: 'pdr2', viewValue: 'Designado' },
        { value: 'pdr3', viewValue: 'Inversionista' },
        { value: 'pdr4', viewValue: 'Religioso' },
        { value: 'pdr5', viewValue: 'Especial' },
        { value: 'pdr6', viewValue: 'formación' },
        { value: 'pdr7', viewValue: 'Investigación' },
        { value: 'pdr8', viewValue: 'Familiar' },
        { value: 'pdr9', viewValue: 'hijo o hija menor de edad' },
        { value: 'pdr10', viewValue: 'hijo o hija mayor de edad' },
        { value: 'pdr11', viewValue: 'conyuge' },
        { value: 'pdr12', viewValue: 'casado' },
        { value: 'pdr13', viewValue: 'unión de hecho' },
        { value: 'pdr14', viewValue: 'convivencia' },
        { value: 'pdr15', viewValue: 'Trabajador' },
      ]
    },
    {
      name: 'PERMISOS',
      disabled: true,
      tramite: [
        { value: 'perm1', viewValue: 'Trabajo' },
        { value: 'perm2', viewValue: 'Firma documento' },
        { value: 'perm3', viewValue: 'Contrato' },
        { value: 'perm4', viewValue: 'Viaje (30 días)' },
      ]
    },
    {
      name: 'SUBSANACION',
      tramite: [
        { value: 'subs1', viewValue: 'Cambio de Calidad Migratoria' },
        { value: 'subs2', viewValue: 'Prórroga de Residencia' },
      ]
    },
    {
      name: 'PAGO TAE',
      tramite: [
        { value: 'ptae1', viewValue: 'TAE' },
        { value: 'ptae2', viewValue: 'Exoneración' },
        { value: 'ptae3', viewValue: 'Pago' },
      ]
    },
    {
      name: 'CONSULTAS EN LÍNEA',
      tramite: [
        { value: 'consel1', viewValue: 'Carné' },
        { value: 'consel2', viewValue: 'Permiso temporal de permanencia' },
        { value: 'consel3', viewValue: 'PTP' },
        { value: 'consel4', viewValue: 'Pasaporte' },
        { value: 'consel5', viewValue: 'TAM' },
        { value: 'consel6', viewValue: 'Título' },
        { value: 'consel7', viewValue: 'Nacionalización' },
      ]
    },
    {
      name: 'CONSTANCIAS',
      tramite: [
        { value: 'const1', viewValue: 'Carné' },
        { value: 'const2', viewValue: 'Permiso temporal de permanencia' },
        { value: 'const3', viewValue: 'PTP' },
        { value: 'const4', viewValue: 'Título' },
        { value: 'const5', viewValue: 'Nacionalización' },
      ]
    },
    {
      name: 'CITAS EN LÍNEA',
      tramite: [
        { value: 'citel1', viewValue: 'Recojo' },
        { value: 'citell2', viewValue: 'Informes' },
      ]
    },
    {
      name: 'DUPLICADOS',
      tramite: [
        { value: 'dupli1', viewValue: 'Carné' },
        { value: 'dupli2', viewValue: 'PTP' },
      ]
    },
    {
      name: 'CERTIFICADOS',
      tramite: [
        { value: 'certi1', viewValue: 'Movimiento Migratorio' },
        { value: 'certi2', viewValue: 'Registro' },
        { value: 'certi3', viewValue: 'Central' },
      ]
    },
    {
      name: 'DEVOLUCIÓN DE PAGOS',
      tramite: [
        { value: 'ddp1', viewValue: 'Devolución' },
        { value: 'ddp2', viewValue: 'Registro' }
      ]
    }
  ];*****************************/

  //.....................................................
  /*********************array = [
    { name: "primero", value: "a b c" },
    { name: "segundo", value: "b" },
    { name: "primero", value: "a" },
    { name: "segundo", value: "b" }
  ];***********/

 /************************* tiposTramites = [
    {
      "id": 1,
      "link": "",
      "nombreTramite": "CAMBIO DE CALIDAD MIGRATORIA",
      "tramite": [
        { 'tipo': 'Residente' },
        { 'tipo': 'Temporal' },
        { 'tipo': 'Designado Residente' },
        { 'tipo': 'Inversionista Residente' },
        { 'tipo': 'Religioso Residente' },
        { 'tipo': 'Temporal MERCOSUR' },
        { 'tipo': 'Permanente MERCOSUR' },
        { 'tipo': 'MERCOSUR' },
        { 'tipo': 'Designado Temporal' },
        { 'tipo': 'Especial Residente' },
        { 'tipo': 'Formación Residente' },
        { 'tipo': 'Formación Temporal' },
        { 'tipo': 'Investigación Residente' },
        { 'tipo': 'Investigación Temporal' },
        { 'tipo': 'Permanente' },
        { 'tipo': 'Familiar Residente' },
        { 'tipo': 'Hijo o Hija Menor de Edad' },
        { 'tipo': 'Hijo o Hija Mayor de Edad' },
        { 'tipo': 'Conyuge' },
        { 'tipo': 'Casado' },
        { 'tipo': 'Unión de Hecho' },
        { 'tipo': 'Convivencia' },
        { 'tipo': 'Rentista Residente' },
        { 'tipo': 'Trabajador Residente' },
        { 'tipo': 'Trabajador Temporal' },
      ]
    },
    {
      "id": 2,
      "link": "",
      "nombreTramite": "PRÓRROGA DE RESIDENCIA",
      "tramite": [
        { "tipo": "Residente" },
        { "tipo": "Designado" },
        { "tipo": "Inversionista" },
        { "tipo": "Religioso" },
        { "tipo": "Especial" },
        { "tipo": "Formación" },
        { "tipo": "Investigación" },
        { "tipo": "Familiar" },
        { "tipo": "Hijo o Hija Menor de Edad" },
        { "tipo": "Hijo o Hija Mayor de Edad" },
        { "tipo": "Conyuge" },
        { "tipo": "Casado" },
        { "tipo": "Unión de Hecho" },
        { "tipo": "Convivencia" },
        { "tipo": "Trabajador" },
      ]
    },
    {
      "id": 3,
      "link": "",
      "nombreTramite": "PERMISOS",
      "tramite": [
        { "tipo": "Trabajo" },
        { "tipo": "Firma Documento" },
        { "tipo": "Contrato" },
        { "tipo": "Viaje (30 Días)" },
      ]
    },
    {
      "id": 4,
      "link": "",
      "nombreTramite": "SUBSANACION",
      "tramite": [
        { "tipo": "Cambio de Calidad Migratoria" },
        { "tipo": "Prórroga de Residencia" },
      ]
    },
    {
      "id": 5,
      "link": "",
      "nombreTramite": "PAGO TAE",
      "tramite": [
        { "tipo": "TAE" },
        { "tipo": "Exoneración" },
        { "tipo": "Pago" },
      ]
    },
    {
      "id": 6,
      "link": "",
      "nombreTramite": "CONSULTAS EN LÍNEA",
      "tramite": [
        { "tipo": "Carné" },
        { "tipo": "Permiso Temporal de Permanencia" },
        { "tipo": "PTP" },
        { "tipo": "Pasaporte" },
        { "tipo": "TAM" },
        { "tipo": "Título" },
        { "tipo": "Nacionalización" },
      ]
    },
    {
      "id": 7,
      "link": "",
      "nombreTramite": "CONSTANCIAS",
      "tramite": [
        { "tipo": "Carné" },
        { "tipo": "Permiso Temporal de Permanencia" },
        { "tipo": "PTP" },
        { "tipo": "Título" },
        { "tipo": "Nacionalización" },
      ]
    },
    {
      "id": 8,
      "link": "",
      "nombreTramite": "CITAS EN LÍNEA",
      "tramite": [
        { "tipo": "Recojo" },
        { "tipo": "Informes" },
      ]
    },
    {
      "id": 9,
      "link": "",
      "nombreTramite": "DUPLICADOS",
      "tramite": [
        { "tipo": "Carné" },
        { "tipo": "PTP" },
      ]
    },
    {
      "id": 10,
      "link": "",
      "nombreTramite": "CERTIFICADOS",
      "tramite": [
        { "tipo": "Movimiento Migratorio" },
        { "tipo": "Registro" },
        { "tipo": "Central" },
      ]
    },
    {
      "id": 11,
      "link": "",
      "nombreTramite": "DEVOLUCIÓN DE PAGOS",
      "tramite": [
        { "tipo": "Devolución" },
        { "tipo": "Registro" },
      ]
    }
  ]

  ccmig: any[];
  pdres: any[];
  permi: any[];
  subsa: any[];
  patea: any[];
  coeli: any[];
  const: any[];
  cieli: any[];
  dupli: any[];
  certi: any[];
  dpago: any[];************************************************/

 ////////////////////////////// private callFuncionBuscar() {
    /*var myStr = "I think, therefore I am.";
    if (myStr.indexOf("gggggg") != -1) {
      console.log(myStr);
    }

    var str = "Visit W3Schools  aa bb";
    var n = str.search("hjsds");
    console.log(n)*/

    /*if (tiptramite.tramite.indexOf('Victor') != -1) {
      this.ccm.push(tiptramite)
    }*/

    /*******************this.ccmig = [];
    this.pdres = [];
    this.permi = [];
    this.subsa = [];
    this.patea = [];
    this.coeli = [];
    this.const = [];
    this.cieli = [];
    this.dupli = [];
    this.certi = [];
    this.dpago = [];

    this.tiposTramites.forEach((tiptramite) => {
      switch (tiptramite.nombreTramite) {
        case 'CAMBIO DE CALIDAD MIGRATORIA':
          tiptramite.tramite.forEach((tccp) => {
            if (tccp.tipo.indexOf('Temporal') != -1) {
              this.ccmig.push(tccp)
            }
          });
          break;
        case 'PRÓRROGA DE RESIDENCIA':
          tiptramite.tramite.forEach((tpdr) => {
            if (tpdr.tipo.indexOf('Temporal') != -1) {
              this.pdres.push(tpdr)
            }
          });
          break;
        case 'PERMISOS':
          tiptramite.tramite.forEach((tperm) => {
            if (tperm.tipo.indexOf('Temporal') != -1) {
              this.permi.push(tperm)
            }
          });
          break;
        case 'SUBSANACION':
          tiptramite.tramite.forEach((tsubs) => {
            if (tsubs.tipo.indexOf('Temporal') != -1) {
              this.subsa.push(tsubs)
            }
          });
          break;
        case 'PAGO TAE':
          tiptramite.tramite.forEach((tpt) => {
            if (tpt.tipo.indexOf('Temporal') != -1) {
              this.patea.push(tpt)
            }
          });
          break;
        case 'CONSULTAS EN LÍNEA':
          tiptramite.tramite.forEach((tcoel) => {
            if (tcoel.tipo.indexOf('Temporal') != -1) {
              this.coeli.push(tcoel)
            }
          });
          break;
        case 'CONSTANCIAS':
          tiptramite.tramite.forEach((tcons) => {
            if (tcons.tipo.indexOf('Temporal') != -1) {
              this.const.push(tcons)
            }
          });
          break;
        case 'CITAS EN LÍNEA':
          tiptramite.tramite.forEach((tciel) => {
            if (tciel.tipo.indexOf('Temporal') != -1) {
              this.cieli.push(tciel)
            }
          });
          break;
        case 'DUPLICADOS':
          tiptramite.tramite.forEach((td) => {
            if (td.tipo.indexOf('Temporal') != -1) {
              this.dupli.push(td)
            }
          });
          break;
        case 'CERTIFICADOS':
          tiptramite.tramite.forEach((tcer) => {
            if (tcer.tipo.indexOf('Temporal') != -1) {
              this.certi.push(tcer)
            }
          });
          break;
        case 'DEVOLUCIÓN DE PAGOS':
          tiptramite.tramite.forEach((tdp) => {
            if (tdp.tipo.indexOf('Temporal') != -1) {
              this.dpago.push(tdp)
            }
          });
          break;
      }
    });
  }*********************/

}
