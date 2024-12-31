export interface Player {
          pseudo: string;
          violet: boolean;
          vert: boolean;
          orange: boolean;
          arbre: boolean;
          noir: boolean;
          bloquer: boolean;
          role: 'joueur' | 'co-admin' | 'admin';
          password?: string;
        }
